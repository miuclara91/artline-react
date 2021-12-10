import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
    const {
        open,
        handleEditar,
        // data,
        infoUsuario,
        // setUser
    } = props;

    console.log(infoUsuario);
    // const [token, setToken] = useState(data.token);
    // const [id, setId] = useState(infoUsuario.id);
    const [nombre, setNombre] = useState('');
    const [bio, setBio] = useState('');
    //Foto de perfil
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    useEffect(() => {//Carga la información del usuario en los input
        setNombre(infoUsuario.nombre);
        setBio(infoUsuario.bio);
    }, []);

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };
    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleImageInputChange = (event) =>{
        const file = event.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(event.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitInfo = (e) => {
        e.preventDefault();
        if (selectedFile){
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                uploadImage(reader.result);
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
            };
        } else{
            uploadImage('')
        }
    };

    const uploadImage = async (base64EncodedImage) => {
        // console.log(base64EncodedImage)
        let data = { nombre, bio }
        if(base64EncodedImage !== ''){
            data = { nombre, bio, base64EncodedImage }
        }
        try {
            const opciones = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify({ data}),
            };
            const result = await fetch(`http://localhost:4001/Artline/usuarios/${infoUsuario.id}`, opciones);
            console.log("newDataUser: -> ", result.json());
            setFileInputState('');
            setPreviewSource('');
            setSelectedFile('');
            handleEditar()
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <Dialog open={open} onClose={handleEditar}>
            <form onSubmit={handleSubmitInfo}>
                <DialogTitle>Editar información del perfil</DialogTitle>
                <DialogContent align="center">
                    {previewSource && (
                        <Box mt={2} textAlign="center">
                            <img src={previewSource} alt='Imagen seleccionada' height="200px" />
                        </Box>
                    )}
                    <input
                        type="file"
                        id="select-image"
                        name="image"
                        style={{ display: 'none' }}
                        onChange={handleImageInputChange}
                        value={fileInputState} />
                    <label htmlFor="select-image">
                        <Button variant="contained" color="primary" component="span">
                            Nueva foto de Perfil
                        </Button>
                    </label>
                    <TextField
                        margin="dense"
                        id="nombre"
                        label="Nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                        type="text"
                        fullWidth
                        color='secondary'
                    />
                    <TextField
                        margin="dense"
                        id="bio"
                        value={bio}
                        onChange={handleBioChange}
                        type="text"
                        fullWidth
                        label="Biografía"
                        multiline
                        color='secondary'
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="secondary"  onClick={handleEditar}>Cerrar</Button>
                    <Button variant="contained" color="primary" type='submit' >Actualizar</Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
