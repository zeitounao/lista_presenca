import React, { useState, useEffect } from 'react';
import './styles.css';

export type PropriedadeCard = {
  name: string;
  time: string;
}

export function Card(props: PropriedadeCard) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}