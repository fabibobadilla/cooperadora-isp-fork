"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Home() {

  const [stats,setStats] = useState([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(response => response.json())
      .then(stats => {
        setStats(stats);
      })
  },[])

  return (
    <>
      <h1 className='layout-title'>Inicio</h1>
      <div className='page-wrapper'>
        <div className='stats-wrapper'>
          {stats.map((stat) => (
            <Link href={stat.url}>
              <div className='stat-item'>
                <span>{stat.contador}</span>
                <h2>{stat.titulo}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
