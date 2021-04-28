import React from 'react';

export default function Header(prop) {
    return (
            <div class="page-title">
                <h1>{prop.title}</h1>
            </div>
    );
}