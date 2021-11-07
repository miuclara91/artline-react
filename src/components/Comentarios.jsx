import React from 'react';
import PropTypes from 'prop-types';


const Comentarios = () => {
    const { postId } = props;
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerComentarios = async (idPost) => {
        if (idPost !== '') {
            const data = await fetch(
                `https://artline-team10.herokuapp.com/artline/comentarios/comentariosBYpublicacion/${idPost}`
            );
            const comentarios = await data.json();
            setComentarios(comentarios);
        }
    };

    return (
        <div>
            renderizo los comentarios
        </div>
    );
};


Comentarios.propTypes = {

};


export default Comentarios;
