import React from 'react';

export default function HeaderImage(prop) {
  return (
    <div class="image-header">
      <img class="header" src={prop.image} alt="The School of Engineering Technology & Applied Science" /> 	
    </div>
  );
}