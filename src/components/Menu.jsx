import React from 'react'
import { useParams } from 'react-router-dom'


export default function Menu() {

    const params = useParams();
    console.log(params.name);
    let imageSource = '/media/' + params.name + '.png';

    return (
        <div>{params.name}</div>
    )
}
