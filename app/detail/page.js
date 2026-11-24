'use client'

import { KartuProfil } from "./componens/KartuProfil"
export default function Home() {
  return (
    <main className="halaman">
      <h1>Kartu Profil Interaktif</h1>
      <p>Latihan React hari pertama.</p>

      {/*Kartu Profil*/}
   <KartuProfil nama= "Caca" kelas="XII RPL 1" hobi= "Mendengarkan music"/>
   <KartuProfil nama= "Dewa" kelas="XII RPL 1" hobi= "Mendengarkan music"/>
   <KartuProfil nama= "Suci" kelas="XII RPL 1" hobi= "Mendengarkan music"/>

    </main>
  );
}



