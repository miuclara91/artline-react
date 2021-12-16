import React from 'react';
import { useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { useHistory } from "react-router-dom";
import { Button, Box, TextField, Dialog, DialogTitle, DialogActions, DialogContent } from "@mui/material";

const Newpost = (props) => {
    const {
        open,
        handleNewPost,
        id
    } = props;
    const [user] = useLocalStorage("user", "");
    const [token] = useState(user ? user[1].token : '');
    const [descripcion, setDescripcion] = useState("");
    //Imagen 
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const HOST = "https://artline-team10.herokuapp.com/artline/publicaciones";
    // const HOST_TEST = "http://localhost:4001/Artline/publicaciones"; 

    let history = useHistory();

    const handleImageInputChange = (event) => {
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

    const createPostArtline = (e) => {
        e.preventDefault();
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                uploadImage(reader.result);
            };
            reader.onerror = () => {
                console.error('AHHHHHHHH!!');
            };
        } else {
            uploadImage('')
        }
    };

    const uploadImage = async (base64EncodedImage) => {
        let allInfo = { 
            idUsuario: id,
            imagen: base64EncodedImage,
            descripcion: descripcion
        }
        try {
            const data = await fetch(HOST, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(allInfo),
            });
            const PostComplete = await data.json();
            setFileInputState('');
            setPreviewSource('');
            setSelectedFile('');
            handleNewPost()
            history.push(`/post`);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDescripcion = (event) => {
        setDescripcion(event.target.value);
    };
    return (
        <Dialog open={open} fullWidth={true} maxWidth={'sm'}>
            <DialogTitle>Comparte una nueva obra de arte</DialogTitle>
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
                        Selecciona una imagen
                    </Button>
                </label>
                <TextField
                    margin="dense"
                    id="descripcion"
                    label="Descripción"
                    type="text"
                    fullWidth
                    multiline
                    color='secondary'
                    onChange={handleDescripcion}
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" disabled={selectedFile === ""} onClick={createPostArtline} >Publicar</Button>
                <Button variant="contained" color="secondary" onClick={handleNewPost}>Cancelar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Newpost;
