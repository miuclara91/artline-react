import React from 'react';

import { Button, TextField, Dialog, DialogActions, DialogContent, Box, DialogTitle } from '@mui/material';

const PostEdit = (props) => {
    const {
        open,
        handleOpenEditPost,
        handleClose,
        handleEditar,
        data
    } = props;

    return (
        <Dialog open={open} onClose={handleClose}>
            {/* <form onSubmit={handleSubmitInfo}> */}
            <DialogTitle>Editar publicacion</DialogTitle>
            <DialogContent align="center">
                <TextField
                    margin="dense"
                    id="nombre"
                    label="Imagen"
                    value="input imagen"
                    type="text"
                    fullWidth
                    color='secondary'
                />
                <TextField
                    margin="dense"
                    id="descripcion"
                    label="Descripcion"
                    value={data.descripcion}
                    type="text"
                    fullWidth
                    color='secondary'
                />
            </DialogContent>
            <DialogActions>
                {/* <Button variant="contained" color="secondary" onClick={handleEditar}>Cerrar</Button> */}

                <Button variant="contained" color="secondary" onClick={handleClose}>Cerrar</Button>
                <Button variant="contained" color="primary" type='submit' >Actualizar</Button>
            </DialogActions>
            {/* </form> */}
        </Dialog >
    );
}

export default PostEdit;
