const html = `<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertical 3D - Parrucchiere Pisa | Tecnica Vertical 3D Innovativa</title>
    <meta name="description" content="Vertical 3D di Alessandro Siri: tecnica brevettata innovativa con illuminazione astronomica. Specializzati in schiariture tridimensionali naturali a Pisa.">
    <meta name="keywords" content="parrucchiere pisa, vertical 3d, shatush, balayage, tecnica innovativa, alessandro siri">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        header {
            background: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a1a1a;
            letter-spacing: -0.5px;
        }

        .logo-sub {
            font-size: 0.7rem;
            color: #888;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        nav a {
            margin-left: 2rem;
            text-decoration: none;
            color: #333;
            font-size: 0.95rem;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #c41e3a;
        }

        .cta-button {
            background: #c41e3a;
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-size: 0.9rem;
            transition: background 0.3s;
            margin-left: 1.5rem;
        }

        .cta-button:hover {
            background: #a01830;
        }

        .hero {
            background: linear-gradient(135deg, #f5f5f5 0%, #fff 100%);
            padding: 4rem 2rem;
            text-align: center;
        }

        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .hero-text h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            line-height: 1.2;
            color: #1a1a1a;
        }

        .hero-text p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
            line-height: 1.6;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: flex-start;
        }

        .btn-primary {
            background: #c41e3a;
            color: white;
            padding: 1rem 2rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.3s;
            cursor: pointer;
            border: none;
            font-size: 1rem;
        }

        .btn-primary:hover {
            background: #a01830;
        }

        .btn-secondary {
            background: white;
            color: #c41e3a;
            padding: 1rem 2rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            border: 2px solid #c41e3a;
            transition: all 0.3s;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn-secondary:hover {
            background: #c41e3a;
            color: white;
        }

        .hero-image {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .hero-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        .services {
            padding: 4rem 2rem;
            background: white;
        }

        .services-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 3rem;
            color: #1a1a1a;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .service-card {
            background: #f9f9f9;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .service-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .service-card h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .service-card p {
            color: #666;
            font-size: 0.95rem;
        }

        .why-us {
            padding: 4rem 2rem;
            background: #f5f5f5;
        }

        .why-us-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .why-us-image {
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .why-us-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        .why-us-text h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: #1a1a1a;
        }

        .why-us-text ul {
            list-style: none;
            margin-bottom: 2rem;
        }

        .why-us-text li {
            padding: 1rem 0;
            padding-left: 2.5rem;
            position: relative;
            color: #333;
            font-size: 1rem;
        }

        .why-us-text li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #c41e3a;
            font-weight: bold;
            font-size: 1.3rem;
        }

        .booking {
            padding: 4rem 2rem;
            background: white;
        }

        .booking-container {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .booking-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .booking-subtitle {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
        }

        .booking-methods {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 2rem;
        }

        .booking-method {
            padding: 2rem;
            background: #f9f9f9;
            border-radius: 8px;
            border-top: 4px solid #c41e3a;
        }

        .booking-method h3 {
            margin-bottom: 1rem;
            color: #1a1a1a;
        }

        .booking-method p {
            color: #666;
            margin-bottom: 1.5rem;
        }

        .booking-method a {
            display: inline-block;
            background: #c41e3a;
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            text-decoration: none;
            transition: background 0.3s;
        }

        .booking-method a:hover {
            background: #a01830;
        }

        .stats {
            padding: 3rem 2rem;
            background: #1a1a1a;
            color: white;
        }

        .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            text-align: center;
        }

        .stat {
            padding: 2rem;
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: #c41e3a;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 1rem;
            color: #ddd;
        }

        footer {
            background: #0d0d0d;
            color: #999;
            padding: 2rem;
            text-align: center;
            font-size: 0.9rem;
        }

        .footer-links {
            margin-bottom: 1rem;
        }

        .footer-links a {
            color: #999;
            text-decoration: none;
            margin: 0 1rem;
            transition: color 0.3s;
        }

        .footer-links a:hover {
            color: #c41e3a;
        }

        @media (max-width: 768px) {
            .hero-container, .why-us-container, .booking-methods, .stats-container, .services-grid {
                grid-template-columns: 1fr;
            }

            nav {
                display: none;
            }

            .hero-text h1 {
                font-size: 1.8rem;
            }

            .section-title {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <div>
                <div class="logo">VERTICAL 3D</div>
                <div class="logo-sub">di Alessandro Siri</div>
            </div>
            <nav>
                <a href="#servizi">Servizi</a>
                <a href="#chi-siamo">Chi Siamo</a>
                <a href="#prenotazioni">Prenotazioni</a>
                <a href="#contatti">Contatti</a>
                <a href="tel:+39050580362" class="cta-button">Chiama Ora</a>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="hero-container">
            <div class="hero-text">
                <h1>Trasforma i Tuoi Capelli con Vertical 3D</h1>
                <p>Consulenza tricologica professionale e servizi di parrucchiere specializzato. Scopri come possiamo aiutarti a ottenere i capelli che desideri.</p>
                <div class="hero-buttons">
                    <a href="#prenotazioni" class="btn-primary">Prenota Ora</a>
                    <a href="#chi-siamo" class="btn-secondary">Scopri di Più</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://via.placeholder.com/500x600/f0f0f0/999999?text=Capelli+Professionali" alt="Consulenza Capelli">
            </div>
        </div>
    </section>

    <section class="services" id="servizi">
        <div class="services-container">
            <h2 class="section-title">I Nostri Servizi</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">✂️</div>
                    <h3>Taglio & Styling</h3>
                    <p>Tagli moderni e styling personalizzati per esaltare i tuoi tratti. Consulenza gratuita sul look più adatto a te.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">✨</div>
                    <h3>Tecnica Vertical 3D</h3>
                    <p>La nostra tecnica innovativa e brevettata. Schiariture tridimensionali con effetto naturale che ricorda l'azione del sole.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌟</div>
                    <h3>Shatush & Balayage</h3>
                    <p>Schiariture professionali naturali. Ogni tecnica personalizzata in base alla morfologia del viso e dei capelli.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💆</div>
                    <h3>Trattamenti Specifici</h3>
                    <p>Trattamenti rigeneranti e nutrienti per capelli danneggiati. Keratin, olio di argan e proteine professionali.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💇</div>
                    <h3>Piega & Asciugatura</h3>
                    <p>Piega professionale con tecnica a mano. Risultati durrevoli e capelli perfetti per ogni occasione.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">👨‍🦱</div>
                    <h3>Servizi Uomo</h3>
                    <p>Tagli e rasature professionali per l'uomo moderno. Grooming e styling consulenza personalizzata.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="why-us" id="chi-siamo">
        <div class="why-us-container">
            <div class="why-us-image">
                <img src="https://via.placeholder.com/500x400/f0f0f0/999999?text=Studio+Professionale" alt="Studio Vertical 3D">
            </div>
            <div class="why-us-text">
                <h2>Perché Scegliere Vertical 3D</h2>
                <ul>
                    <li><strong>Tecnica Vertical 3D Brevettata</strong> - Innovazione esclusiva di Alessandro Siri dal 2013</li>
                    <li><strong>Illuminazione Astronomica</strong> - Plafoniere sincronizzate col ciclo solare naturale</li>
                    <li><strong>Benessere Garantito</strong> - Riduzione dello stress biologico circadiano e del cortisolo</li>
                    <li><strong>10+ Anni di Esperienza</strong> - Team specializzato in consulenza e tecnica</li>
                    <li><strong>Ambiente Relax</strong> - Showroom progettato per il massimo comfort dei clienti</li>
                    <li><strong>Effetto Prolungato</strong> - Meno necessità di ritocchi, più libertà nel tempo</li>
                </ul>
                <a href="#prenotazioni" class="btn-primary">Prenota la Tua Consulenza</a>
            </div>
        </div>
    </section>

    <section class="booking" id="prenotazioni">
        <div class="booking-container">
            <h2 class="booking-title">Prenota il Tuo Appuntamento</h2>
            <p class="booking-subtitle">Scegli il metodo più comodo per contattarci</p>
            <div class="booking-methods">
                <div class="booking-method">
                    <h3>📞 Telefonare</h3>
                    <p>Chiama direttamente il nostro studio a Pisa</p>
                    <a href="tel:+39050580362">050 580362</a>
                </div>
                <div class="booking-method">
                    <h3>💬 WhatsApp</h3>
                    <p>Scrivi per prenotare via messaggio</p>
                    <a href="https://wa.me/+39050580362?text=Vorrei%20prenotare%20un%20appuntamento%20per%20la%20tecnica%20Vertical%203D">Invia Messaggio</a>
                </div>
                <div class="booking-method">
                    <h3>📧 Email</h3>
                    <p>Contattaci per informazioni</p>
                    <a href="mailto:info@vertical3d.it">info@vertical3d.it</a>
                </div>
            </div>
        </div>
    </section>

    <section class="stats">
        <div class="stats-container">
            <div class="stat">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Clienti Trasformati</div>
            </div>
            <div class="stat">
                <div class="stat-number">10+</div>
                <div class="stat-label">Anni di Innovazione</div>
            </div>
            <div class="stat">
                <div class="stat-number">∞</div>
                <div class="stat-label">Bellezza Naturale</div>
            </div>
        </div>
    </section>

    <footer id="contatti">
        <div class="footer-links">
            <a href="#home">Home</a>
            <a href="#servizi">Servizi</a>
            <a href="#chi-siamo">Chi Siamo</a>
            <a href="#prenotazioni">Prenotazioni</a>
        </div>
        <p>&copy; 2024 Vertical 3D di Alessandro Siri - Pisa. Tutti i diritti riservati.</p>
        <p>Privacy Policy | Termini di Servizio</p>
    </footer>
</body>
</html>`;

export default {
  async fetch(request) {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }
};
