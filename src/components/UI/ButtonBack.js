import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

export const ButtonBack = () => {

    const {goBack} = useHistory()

    return (
        <div className="icon--back" onClick={() => goBack()}>
            <FontAwesomeIcon icon={ faBackward }/>
            <p>Atrás</p>
        </div>
    )
}
