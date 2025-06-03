import React from 'react'
import "./styles/style-cardsLg.css"



export default function CardsLg() {
  return (
    <section class="cards">
        <div class="card-container">
            <div class="card-title">Guardería</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Cuidado diurno y entretenimiento.</p>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card-title">Transporte</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Traslado seguro para tu mascota.</p>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card-title">Alimentación</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Nutrición especializada.</p>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card-title">Accesorios</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Venta de juguetes y ropa.</p>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card-title">Emergencias</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Atención 24/7 para urgencias.</p>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card-title">Baños</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Baños y cuidados de higiene.</p>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card-title">Adiestramiento</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Entrenamiento especializado.</p>
                </div>
            </div>
        </div>

        <div class="card-container">
            <div class="card-title">Veterinario</div>
            <div class="card" onclick="this.classList.toggle('flip')">
                <div class="card-face front"></div>
                <div class="card-face back">
                    <p>Consulta y atención médica.</p>
                </div>
            </div>
        </div>
    </section>
    
  )
}
