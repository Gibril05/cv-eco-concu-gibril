"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profil");
  // Nouveau state pour gérer l'ouverture/fermeture de la popup de contact
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0FDF4] pb-20 font-sans relative">
      
      {/* 1. EN-TÊTE ULTRA COLORÉ */}
      <header className="bg-teal-950 text-emerald-50 py-12 md:py-16 px-6 shadow-2xl relative overflow-hidden border-b-8 border-emerald-500">
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-emerald-300 font-bold tracking-widest uppercase text-xs mb-4 inline-block border border-emerald-400/50 bg-emerald-900/50 px-3 py-1 rounded-full">
              Portfolio Éco-conçu 🍃
            </p>
            
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-md">
              Gibril <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Zaoui</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-teal-200 font-light mt-3">
              Développeur Fullstack & Étudiant en BUT Informatique
            </h2>

            <p className="text-teal-100 mt-4 leading-relaxed max-w-2xl text-lg opacity-90">
              Jovial, bienveillant et toujours souriant ! 👋 <br/>
              Je combine ma passion pour l'informatique avec un fort engagement social et écologique.
            </p>
          </div>
          
          {/* Bloc de contact rapide */}
          <div className="bg-teal-900/50 p-6 rounded-3xl border border-teal-700/50 backdrop-blur-sm w-full md:w-auto">
            <ul className="space-y-3 text-teal-100 font-medium">
              <li className="flex items-center gap-3">📍 Douai (Hauts-de-France)</li>
              <li className="flex items-center gap-3">🎂 20 ans (11/07/2005)</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              {/* Le bouton qui ouvre la modale ! */}
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-emerald-500 text-center text-teal-950 px-6 py-2 rounded-xl font-bold hover:bg-emerald-400 transition-colors"
              >
                Me contacter
              </button>
              <a href="https://github.com/Gibril05" target="_blank" rel="noopener noreferrer" className="bg-teal-950 text-center border border-teal-700 text-teal-100 px-6 py-2 rounded-xl font-bold hover:bg-teal-800 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        {/* Décorations CSS pures */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      </header>

      {/* 2. NAVIGATION PAR ONGLETS */}
      <nav className="max-w-5xl mx-auto px-6 mt-8">
        <div className="flex overflow-x-auto gap-2 border-b-2 border-teal-200 pb-2 scrollbar-hide">
          <TabButton active={activeTab === 'profil'} onClick={() => setActiveTab('profil')}>👤 Profil & Langues</TabButton>
          <TabButton active={activeTab === 'experiences'} onClick={() => setActiveTab('experiences')}>💼 Expériences</TabButton>
          <TabButton active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>💻 Compétences</TabButton>
          <TabButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>🚀 Projets</TabButton>
          <TabButton active={activeTab === 'passions'} onClick={() => setActiveTab('passions')}>🌍 Passions</TabButton>
        </div>
      </nav>

      {/* 3. CONTENU DYNAMIQUE */}
      <main className="max-w-5xl mx-auto px-6 mt-10">
        {activeTab === 'profil' && <ProfilTab />}
        {activeTab === 'experiences' && <ExperiencesTab />}
        {activeTab === 'skills' && <SkillsTab />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'passions' && <PassionsTab />}
      </main>

      {/* 4. LA POPUP (MODALE) DE CONTACT */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Le fond assombri (cliquer dessus ferme la popup) */}
          <div 
            className="absolute inset-0 bg-teal-950/60 backdrop-blur-sm"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          
          {/* La boîte de la popup */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full relative z-10 animate-fade-in border border-teal-100">
            <button 
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 hover:text-gray-800 transition-colors"
              aria-label="Fermer"
            >
              ✕
            </button>
            
            <div className="text-4xl mb-2">👋</div>
            <h3 className="text-2xl font-black text-teal-950 mb-2">Contactez-moi !</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Je suis toujours ouvert à la discussion pour un projet, un stage ou une alternance. N'hésitez pas à m'appeler ou m'envoyer un email !
            </p>

            <div className="space-y-4">
              {/* Bouton Téléphone */}
              <a href="tel:0618319807" className="flex items-center gap-4 p-4 bg-teal-50 rounded-2xl hover:bg-teal-100 transition-colors border border-teal-100 group">
                <span className="text-2xl group-hover:scale-110 transition-transform">📱</span>
                <div>
                  <span className="block text-xs text-teal-700 font-bold uppercase tracking-wider">Téléphone</span>
                  <span className="block text-teal-950 font-medium text-lg">06 18 31 98 07</span>
                </div>
              </a>

              {/* Bouton Email */}
              <a href="mailto:gibrilzaoui9@gmail.com" className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors border border-emerald-100 group">
                <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                <div>
                  <span className="block text-xs text-emerald-700 font-bold uppercase tracking-wider">Email</span>
                  <span className="block text-emerald-950 font-medium text-base truncate">gibrilzaoui9@gmail.com</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* =====================================================================
   LES ONGLETS (CONTENU)
   ===================================================================== */

function ProfilTab() {
  return (
    <div className="animate-fade-in space-y-10">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-teal-100 flex flex-col md:flex-row gap-8 items-center">
        <div className="text-8xl">👋</div>
        <div>
          <h2 className="text-2xl font-black text-teal-950 mb-3">Ma Personnalité</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            D'un naturel <strong>jovial, souriant et avenant</strong>, j'accorde une grande importance aux relations humaines. Je suis reconnu pour être <strong>gentil, attentionné et bienveillant</strong> dans mon travail comme dans ma vie personnelle. J'aime l'esprit d'équipe et tirer les gens vers le haut !
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="🎓 Formation">
          <div className="space-y-4">
            <Card title="BUT Informatique" subtitle="IUT de Lens" date="En cours" color="teal">
              Développement web, algorithmique, POO, bases de données.
            </Card>
            <Card title="Bac Scientifique (Mention Bien)" subtitle="Lycée Saint-Jean (Douai)" date="Obtenu" color="emerald">
              Spécialités : Maths, Physique-Chimie, NSI.
            </Card>
          </div>
        </Section>

        <Section title="🗣️ Langues">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
             <LanguageBar name="Français" level="Langue maternelle" percent={100} color="from-teal-400 to-emerald-500" />
             <LanguageBar name="Anglais" level="Courant" percent={80} color="from-blue-400 to-indigo-500" />
             <LanguageBar name="Espagnol" level="Intermédiaire" percent={60} color="from-amber-400 to-orange-500" />
             <LanguageBar name="Arabe" level="Notions" percent={30} color="from-emerald-400 to-teal-500" />
          </div>
        </Section>
      </div>
    </div>
  );
}

function ExperiencesTab() {
  return (
    <div className="animate-fade-in space-y-6">
      <Section title="💼 Mon Parcours Professionnel">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200 hover:shadow-md transition-all">
            <div className="text-4xl mb-3">🏊‍♂️</div>
            <h3 className="text-xl font-bold text-blue-900">Maître Nageur (BNSSA)</h3>
            <span className="inline-block bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded-full mb-3">Sécurité & Responsabilité</span>
            <p className="text-blue-800 text-sm">Surveillance de bassins, gestion des urgences et sécurité du public. Un poste qui demande une concentration extrême et du sang-froid.</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-3xl border border-orange-200 hover:shadow-md transition-all">
            <div className="text-4xl mb-3">🏕️</div>
            <h3 className="text-xl font-bold text-orange-900">Animateur BAFA</h3>
            <span className="inline-block bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded-full mb-3">Spécialisation Handicap</span>
            <p className="text-orange-800 text-sm">Colonies de vacances à Bordeaux, Marseille et Paris. Encadrement de jeunes, avec une spécialisation pour l'accompagnement des enfants en situation de handicap.</p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-200 hover:shadow-md transition-all">
            <div className="text-4xl mb-3">🇫🇷</div>
            <h3 className="text-xl font-bold text-indigo-900">Tuteur SNU</h3>
            <span className="inline-block bg-indigo-200 text-indigo-800 text-xs font-bold px-2 py-1 rounded-full mb-3">Devoir de mémoire</span>
            <p className="text-indigo-800 text-sm">Service National Universel. Encadrement de la jeunesse, transmission des valeurs républicaines et animation d'ateliers sur le devoir de mémoire.</p>
          </div>

          <div className="bg-rose-50 p-6 rounded-3xl border border-rose-200 hover:shadow-md transition-all">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="text-xl font-bold text-rose-900">Caissier</h3>
            <span className="inline-block bg-rose-200 text-rose-800 text-xs font-bold px-2 py-1 rounded-full mb-3">Intermarché Estaimpuis</span>
            <p className="text-rose-800 text-sm">Contact client direct, gestion de caisse, dynamisme et adaptabilité dans un environnement à rythme soutenu.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

function SkillsTab() {
  return (
    <div className="animate-fade-in space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-teal-950 mb-6">💻 Langages</h3>
          <SkillBar name="SQL / Bases de données" percent={90} />
          <SkillBar name="Java" percent={85} />
          <SkillBar name="Python" percent={80} />
          <SkillBar name="JavaScript" percent={75} />
          <SkillBar name="C/C++" percent={65} />
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6">🌐 Web & Outils</h3>
          <SkillBar name="HTML5 / CSS3" percent={95} />
          <SkillBar name="VS Code" percent={90} />
          <SkillBar name="Git / GitHub" percent={85} />
          <SkillBar name="Éco-conception IT" percent={75} />
          <SkillBar name="React / Next.js" percent={60} />
        </div>
      </div>
    </div>
  );
}

function ProjectsTab() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-emerald-500 text-teal-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">Projet Phare</span>
          <h3 className="text-3xl font-black mb-2">FreshSave</h3>
          <p className="text-emerald-100 text-lg mb-6 max-w-xl">
            Application anti-gaspillage alimentaire (En développement). Mise en relation directe entre commerçants et utilisateurs pour réduire le "food waste".
          </p>
          <div className="flex gap-2 mb-4">
             <Badge dark>React</Badge> <Badge dark>Node.js</Badge> <Badge dark>Impact Social</Badge>
          </div>
        </div>
        <div className="absolute right-[10px] bottom-[-20px] text-emerald-800 opacity-30 text-[150px] leading-none">🍎</div>
      </div>

      <div className="bg-white p-8 rounded-3xl border-2 border-teal-100 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 inline-block">BUT Informatique</span>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Projets Académiques Multiples</h3>
          <p className="text-gray-600 mb-6">
            Développement complet de sites web et d'applications en équipe. Conception de bases de données, écriture d'algorithmes complexes et documentation rigoureuse.
          </p>
          <div className="flex gap-2">
              <Badge>Git</Badge> <Badge>Agile</Badge> <Badge>SQL</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

function PassionsTab() {
  return (
    <div className="animate-fade-in space-y-8">
      <Section title="🌍 Passions & Engagements">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-3xl border border-green-200">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-lg font-bold text-green-900 mb-2">Fresque du Climat</h3>
            <p className="text-green-800 text-sm">
              Animateur engagé. J'organise des sessions pour sensibiliser aux enjeux environnementaux et pousser à l'action concrète.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-3xl border border-gray-700 text-white">
            <div className="text-5xl mb-4">🏋️‍♂️</div>
            <h3 className="text-lg font-bold text-gray-100 mb-2">Musculation</h3>
            <p className="text-gray-300 text-sm">
              Pratique intensive. Cette discipline m'a forgé une rigueur de fer, une grande persévérance et le goût du dépassement de soi.
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200">
            <div className="text-5xl mb-4">🎵</div>
            <h3 className="text-lg font-bold text-amber-900 mb-2">Clarinette</h3>
            <p className="text-amber-800 text-sm">
              Pratique de la clarinette. La musique m'apporte créativité, écoute de l'autre (jeu en groupe) et précision.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

/* =====================================================================
   COMPOSANTS UI RÉUTILISABLES
   ===================================================================== */

function TabButton({ children, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap px-6 py-3 font-bold rounded-full transition-all duration-300 ${
        active 
        ? "bg-teal-900 text-white shadow-md" 
        : "bg-teal-50 text-teal-700 hover:bg-teal-100"
      }`}
    >
      {children}
    </button>
  );
}

function Section({ title, children }: any) {
  return (
    <section>
      <h2 className="text-2xl font-black text-teal-950 mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Card({ title, subtitle, date, children, color = "teal" }: any) {
  const borderColors: any = { teal: "border-teal-400", emerald: "border-emerald-400" };
  const bgColors: any = { teal: "bg-teal-50 text-teal-700", emerald: "bg-emerald-50 text-emerald-700" };

  return (
    <article className={`bg-white p-5 rounded-2xl border-l-8 ${borderColors[color]} shadow-sm`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className={`text-xs font-bold px-3 py-1 rounded-full mt-2 md:mt-0 w-fit ${bgColors[color]}`}>{date}</span>
      </div>
      <p className="text-sm font-medium text-gray-500 mb-2">{subtitle}</p>
      <p className="text-gray-700 text-sm leading-relaxed">{children}</p>
    </article>
  );
}

function Badge({ children, dark = false }: any) {
  return (
    <span className={`px-3 py-1 text-sm rounded-lg font-semibold ${dark ? "bg-emerald-800 text-emerald-100" : "bg-gray-100 text-gray-700 border border-gray-200"}`}>
      {children}
    </span>
  );
}

function SkillBar({ name, percent }: { name: string, percent: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-bold text-teal-900 text-sm">{name}</span>
        <span className="text-xs text-teal-600 font-bold">{percent}%</span>
      </div>
      <div className="w-full bg-teal-50 rounded-full h-3 overflow-hidden shadow-inner">
        <div className="bg-gradient-to-r from-teal-400 to-emerald-500 h-3 rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function LanguageBar({ name, level, percent, color }: { name: string, level: string, percent: number, color: string }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-1">
        <span className="font-bold text-gray-800">{name}</span>
        <span className="text-xs text-gray-500 font-medium">{level}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div className={`bg-gradient-to-r ${color} h-2 rounded-full`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}