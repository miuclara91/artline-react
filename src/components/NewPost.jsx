import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from "react";
import { useLocalStorage } from "../helpers/useLocalStorage";
import {
    Button,
    TextField,
} from "@mui/material";

const Newpost = (props) => {
    const {
        open,
        handleNewPost,
        id
    } = props;
   
    const [user, setUser] = useLocalStorage("user", "");
    const [token, setToken] = useState(user[1].token);
    const [newImg, setnewImg] = useState("");
    const [newDesc, setnewDesc] = useState("");
    const HOST = "https://artline-team10.herokuapp.com/artline/publicaciones";
   
    const handlenewImg = (event) => {
        setnewImg(event.target.value);
    };

    const handlenewDesc = (event) => {
        setnewDesc(event.target.value);
    };
    const createPostArtline = async () => {
        const allInfo = {
            idUsuario: id,
            imagen: newImg,
            descripcion: newDesc
        };

        const data = await fetch(HOST, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(allInfo),
        });
        const PostComplete = await data.json();
        console.log(PostComplete);
        handleNewPost();       
    }
    return (
        <Dialog open={open}>
            <DialogContent>
                <TextField
                    margin="dense"
                    id="newImg"
                    label="IMAGEN"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handlenewImg}
                />
                <TextField
                    margin="dense"
                    id="newDesc"
                    label="DESCRIPCIÓN"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handlenewDesc}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() =>
                    createPostArtline()
                } >CREAR</Button>
                <Button onClick={handleNewPost}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Newpost;
