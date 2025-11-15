import { WellnessProgramsData } from '../types';

export const wellnessProgramsData: WellnessProgramsData = {
    start: {
        id: 'start',
        name: '🌟 Programma Start: Routine del Benessere',
        subtitle: '💥 La Settimana del Successo',
        description: 'Completa le attività giornaliere e settimanali per costruire abitudini sane e accumulare punti.',
        Icon: '✨',
        numWeeks: 10,
        daily: [
            { id: 'start_d_new_0', title: 'Meditare regolarmente', Icon: '🧘', description: '15–20 minuti prima di dormire.', points: 5, remindable: true, reminderConfig: { type: 'daily', time: '22:00' } },
            { id: 'start_d_new_1', title: 'Orari regolari (mattina)', Icon: '⏰', description: 'Sveglia costante.', points: 5 },
            { id: 'start_d_new_2', title: 'Orari regolari (sera)', Icon: '⏰', description: 'Orario fisso per dormire.', points: 5 },
            { id: 'start_d_new_3', title: 'Stretching o movimento', Icon: '🤸', description: 'Durante la giornata.', points: 5 },
            { id: 'start_d_new_4', title: 'Evitare caffeina', Icon: '☕🚫', description: 'Nel pomeriggio e sera.', points: 5 },
            { id: 'start_d_new_5', title: 'Evitare alcol', Icon: '🍷🚫', description: 'Nel pomeriggio e sera.', points: 5 },
            { id: 'start_d_new_6', title: 'Rilassamento muscolare', Icon: '🛌', description: 'Prima di dormire.', points: 5 },
            { id: 'start_d_new_7', title: 'Spegnere dispositivi', Icon: '📵', description: 'Almeno 1h prima di dormire.', points: 5 },
            { id: 'start_d_new_8', title: 'Leggere un libro', Icon: '📖', description: 'Attività serale.', points: 5 },
            { id: 'start_d_new_9', title: 'Bagno caldo', Icon: '🛁', description: 'Relax serale.', points: 5 },
            { id: 'start_d_new_10', title: 'Tracciare abitudini', Icon: '📝', description: 'Diario del sonno.', points: 5 },
            { id: 'start_d_new_11', title: 'Terapia binaurale', Icon: '🎧', description: 'Onde Alpha/Delta.', points: 5 },
            { id: 'start_d_new_12', title: 'Fitoterapia', Icon: '🌿', description: 'Se indicata.', points: 5 },
            { id: 'start_d_new_13', title: 'Idratazione', Icon: '💧', description: '8 bicchieri d’acqua.', points: 5, remindable: true, reminderConfig: { type: 'interval', hours: 2, startHour: 9, endHour: 19 } },
            { id: 'start_d_new_14', title: 'Oli essenziali', Icon: '🌸', description: 'Relax serale.', points: 5 },
            { id: 'start_d_new_15', title: 'Autocompassione', Icon: '💕', description: 'Gentilezza verso sé.', points: 5 },
            { id: 'start_d_new_16', title: 'Passeggiata all’aperto', Icon: '🚶', description: '10–20 minuti.', points: 5 },
            { id: 'start_d_new_17', title: 'Gratitudine', Icon: '🙏', description: 'Esercizi positivi.', points: 5 },
            { id: 'start_d_new_18', title: 'Musica rilassante', Icon: '🎵', description: 'Ascolto consapevole.', points: 5 },
            { id: 'start_d_new_19', title: 'Creatività', Icon: '🎨', description: 'Disegno, scrittura, ecc.', points: 5 },
            { id: 'start_d_new_20', title: 'Limitare social media', Icon: '📱🚫', description: '<30 min al giorno.', points: 5 },
            { id: 'start_d_new_21', title: 'Pianificare pasti', Icon: '📅', description: 'Organizzazione settimanale.', points: 5 },
            { id: 'start_d_new_22', title: 'Verdure a foglia verde', Icon: '🥬', description: 'Almeno una porzione.', points: 5 },
            { id: 'start_d_new_23', title: 'Detox digitale', Icon: '📴', description: '1 giorno senza schermi.', points: 10 },
            { id: 'start_d_new_24', title: 'Meditazione serale (ripetuta)', Icon: '🧘', description: 'Seconda sessione.', points: 5 }
        ],
        weekly: [
            { id: 'start_w_s3_1', title: 'Weekend con alimentazione salutare', description: 'Frutta, verdura, omega-3, proteine magre per almeno 2 giorni.', points: 30, Icon: '🥗' },
            { id: 'start_w_s3_2', title: 'Terapia Cranio-Sacrale', description: '1 sessione settimanale per rilassare il sistema nervoso.', points: 25, Icon: '💆‍♂️' },
            { id: 'start_w_s3_3', title: 'Cibi ricchi di omega-3', description: 'Almeno 3 volte a settimana (es. salmone, noci, semi di lino).', points: 15, Icon: '🐟' },
            { id: 'start_w_s3_4', title: 'Settimana senza Alcol', description: 'Evita completamente il consumo di alcolici per 7 giorni.', points: 20, Icon: '🍷🚫' },
            { id: 'start_w_s3_5', title: 'Meal Prep', description: 'Prepara i pasti in lotti per la settimana.', points: 10, Icon: '🍱' },
            { id: 'start_w_s3_6', title: 'Yoga o Pilates', description: 'Partecipa ad almeno 1 sessione settimanale.', points: 20, Icon: '🧘‍♀️' },
            { id: 'start_w_s3_7', title: 'Sauna infrarossi', description: '1 sessione per rilassare corpo e mente.', points: 30, Icon: '🔥' },
            { id: 'start_w_s3_8', title: 'Zona 2 – Attività fisica', description: '2 sessioni di movimento aerobico a bassa intensità.', points: 80, Icon: '🏃' },
            { id: 'start_w_s3_9', title: 'Tisana Detox', description: 'Bevi almeno 3 tisane depurative durante la settimana.', points: 20, Icon: '🍵' },
            { id: 'start_w_s3_10', title: 'Terapia binaurale/mindfulness', description: '2 sessioni di ascolto consapevole o meditazione guidata.', points: 40, Icon: '🎧' },
            { id: 'start_w_s3_11', title: 'Massaggio rilassante', description: '1 sessione settimanale per sciogliere tensioni muscolari.', points: 50, Icon: '💆' },
            { id: 'start_w_s3_12', title: 'Biofeedback', description: '1 sessione con coerenza cardiaca.', points: 30, Icon: '❤️' },
            { id: 'start_w_s3_13', title: 'Stimolazione Nervo Vago', description: 'Tecnica di rilassamento vagale (es. vocalizzi, respirazione lenta).', points: 30, Icon: '⚡' },
            { id: 'start_w_s3_14', title: 'Programma combinato', description: 'Sauna + massaggio + terapia binaurale + fitoterapia in un’unica sessione.', points: 150, Icon: '🧖‍♂️' }
        ]
    },
    food_level_1: {
        id: 'food_level_1',
        name: 'Missione Alimentare: Livello 1',
        subtitle: 'La Festa dei Sapori',
        description: 'Migliora le tue abitudini con queste missioni giornaliere e settimanali.',
        Icon: '🍽️',
        dailyTarget: 35,
        numWeeks: 10,
        daily: [
            { id: 'food1_d_1', title: 'Riduzione dello Zucchero (1 giorno)', Icon: '🍭', description: 'Evita dolci e bevande zuccherate per tutta la giornata.', points: 10 },
            { id: 'food1_d_2', title: 'Introduzione dei Legumi', Icon: '🌱', description: 'Integra legumi in almeno un pasto del giorno.', points: 10 },
            { id: 'food1_d_3', title: 'Colazione Equilibrata', Icon: '🍳', description: 'Yogurt greco, frutta fresca, granola integrale. Bevanda: tè verde.', points: 5 },
            { id: 'food1_d_4', title: 'Smoothie Detox', Icon: '🍹', description: 'Spinaci, banana, ananas, semi di chia. Bevanda: acqua di cocco.', points: 5 },
            { id: 'food1_d_5', title: 'Spuntino Sano', Icon: '🥕', description: 'Carote e sedano con guacamole. Bevanda: tisana al finocchio.', points: 5 },
            { id: 'food1_d_6', title: 'Cena Light', Icon: '🌙', description: 'Pesce al vapore, patate dolci, asparagi. Bevanda: tè alla menta.', points: 10 },
            { id: 'food1_d_7', title: 'Insalata Proteica', Icon: '🥗', description: 'Pollo grigliato, avocado, pomodorini, semi di zucca. Bevanda: infuso ai frutti di bosco.', points: 10 }
        ],
        weekly: [
            { id: 'food1_w_1', title: '🍭 Riduzione dello Zucchero', description: 'Evitare bevande zuccherate e dolci in almeno due pasti.', points: 20, Icon: '🍭' },
            { id: 'food1_w_2', title: '🌱 Introduzione dei Legumi', description: 'Integrare lenticchie, fagioli o ceci in almeno tre pasti.', points: 30, Icon: '🌱' },
            { id: 'food1_w_3', title: '🍞 Cottura al Forno', description: 'Sostituire cibi fritti con cottura al forno.', points: 20, Icon: '🍞' },
            { id: 'food1_w_4', title: '🍇 Snack Sani', description: 'Frutta secca, noci e semi al posto di snack industriali.', points: 20, Icon: '🍇' },
            { id: 'food1_w_5', title: '🍽️ Pasti Bilanciati', description: 'Proteine magre, carboidrati complessi e verdure colorate.', points: 30, Icon: '🍽️' },
            { id: 'food1_w_6', title: '🍳 Colazione Equilibrata', description: 'Yogurt greco, frutta fresca, granola integrale. Bevanda: tè verde.', points: 20, Icon: '🍳' },
            { id: 'food1_w_7', title: '🥗 Pranzo Vegetariano', description: 'Insalata di quinoa, verdure grigliate, hummus. Bevanda: acqua al limone.', points: 30, Icon: '🥗' },
            { id: 'food1_w_8', title: '🍹 Smoothie Detox', description: 'Spinaci, banana, ananas, semi di chia. Bevanda: acqua di cocco.', points: 10, Icon: '🍹' },
            { id: 'food1_w_9', title: '🥕 Spuntino Sano', description: 'Carote e sedano con guacamole. Bevanda: tisana al finocchio.', points: 10, Icon: '🥕' },
            { id: 'food1_w_10', title: '🌙 Cena Light', description: 'Pesce al vapore, patate dolci, asparagi. Bevanda: tè alla menta.', points: 30, Icon: '🌙' },
            { id: 'food1_w_11', title: '🥗 Insalata Proteica', description: 'Pollo grigliato, avocado, pomodorini, semi di zucca. Bevanda: infuso ai frutti di bosco.', points: 30, Icon: '🥗' },
            { id: 'food1_w_12', title: '🍎 Giornata di Frutta', description: 'Solo frutta fresca (mele, pere, fragole, uva). Bevanda: smoothie di frutta mista.', points: 30, Icon: '🍎' }
        ]
    },
    food_level_2: {
        id: 'food_level_2',
        name: 'Missione Alimentare: Livello 2',
        subtitle: 'Energia in Cucina',
        description: 'Potenzia le tue abitudini con queste missioni giornaliere.',
        Icon: '🍳',
        dailyTarget: 35,
        unlocksAt: 1500,
        dependsOn: 'food_level_1',
        numWeeks: 10,
        daily: [
            { id: 'food2_d_1', title: 'Riduzione dello Zucchero (2 giorni)', Icon: '🍭', description: 'Evita dolci e bevande zuccherate per almeno 2 giorni.', points: 10 },
            { id: 'food2_d_2', title: 'Introduzione dei Legumi (2 pasti)', Icon: '🌱', description: 'Integra legumi in almeno due pasti.', points: 10 },
            { id: 'food2_d_3', title: 'Colazione Equilibrata (2 volte)', Icon: '🍳', description: 'Yogurt, frutta, granola. Bevanda: tè verde.', points: 5 },
            { id: 'food2_d_4', title: 'Smoothie Detox (2 volte)', Icon: '🍹', description: 'Spinaci, banana, ananas, semi di chia.', points: 5 },
            { id: 'food2_d_5', title: 'Spuntino Sano', Icon: '🥕', description: 'Carote e sedano con guacamole.', points: 5 },
            { id: 'food2_d_6', title: 'Cena Light', Icon: '🌙', description: 'Pesce al vapore, patate dolci, asparagi.', points: 10 },
            { id: 'food2_d_7', title: 'Cottura al Forno', Icon: '🍞', description: 'Sostituisci frittura con cottura al forno.', points: 10 },
            { id: 'food2_d_8', title: 'Snack Sani', Icon: '🍇', description: 'Frutta secca, noci, semi.', points: 10 }
        ],
        weekly: []
    },
    food_level_3: {
        id: 'food_level_3',
        name: 'Missione Alimentare: Livello 3',
        subtitle: 'Sfida del Gourmet',
        description: 'Diventa un maestro della nutrizione con missioni avanzate.',
        Icon: '🍲',
        dailyTarget: 35,
        unlocksAt: 1500,
        dependsOn: 'food_level_2',
        numWeeks: 10,
        daily: [
            { id: 'food3_d_1', title: 'Riduzione dello Zucchero (5 giorni)', Icon: '🍭', description: 'Evita dolci e bevande zuccherate per almeno 5 giorni a settimana.', points: 10 },
            { id: 'food3_d_2', title: 'Introduzione dei Legumi (2 pasti)', Icon: '🌱', description: 'Integra legumi in almeno due pasti.', points: 10 },
            { id: 'food3_d_3', title: 'Colazione Equilibrata (4 volte)', Icon: '🍳', description: 'Yogurt, frutta, granola. Bevanda: tè verde.', points: 5 },
            { id: 'food3_d_4', title: 'Smoothie Detox (4 volte)', Icon: '🍹', description: 'Spinaci, banana, ananas, semi di chia.', points: 5 },
            { id: 'food3_d_5', title: 'Spuntino Sano', Icon: '🥕', description: 'Carote e sedano con guacamole.', points: 5 },
            { id: 'food3_d_6', title: 'Cena Light', Icon: '🌙', description: 'Pesce al vapore, patate dolci, asparagi.', points: 10 },
            { id: 'food3_d_7', title: 'Cottura al Forno', Icon: '🍞', description: 'Sostituisci frittura con cottura al forno.', points: 10 },
            { id: 'food3_d_8', title: 'Snack Sani (4 volte)', Icon: '🍇', description: 'Frutta secca, noci, semi almeno 4 volte a settimana.', points: 10 },
            { id: 'food3_d_9', title: 'Pasti Bilanciati (4 volte)', Icon: '🍽️', description: 'Proteine magre, carboidrati complessi, verdure colorate.', points: 10 },
            { id: 'food3_d_10', title: 'Colazione Equilibrata (2 volte)', Icon: '🍳', description: 'Seconda sessione settimanale di colazione equilibrata.', points: 5 },
            { id: 'food3_d_11', title: 'Pranzo Vegetariano (4 volte)', Icon: '🥗', description: 'Quinoa, verdure grigliate, hummus. Bevanda: acqua aromatizzata.', points: 10 }
        ],
        weekly: []
    },
    sleep_level_1: {
        id: 'sleep_level_1',
        name: 'Missione Sonno Giornaliera: Livello 1',
        subtitle: 'Alba Tranquilla',
        description: 'Include tutte le Attività Giornaliere di base come mantenere orari regolari di sonno e praticare la respirazione profonda prima di dormire.',
        Icon: '🌅',
        numWeeks: 10,
        dailyTarget: 35,
        dailyMaxTarget: 60,
        weekly: [],
        daily: [
            { id: 'sl1_d_1', title: 'Orari Regolari di Sonno', Icon: '⏰', description: 'Andare a letto e svegliarsi alla stessa ora ogni giorno.', points: 10 },
            { id: 'sl1_d_2', title: 'Respirazione Profonda', Icon: '🌬️', description: 'Pratica di 10–15 minuti prima di dormire.', points: 10 },
            { id: 'sl1_d_3', title: 'No Dispositivi Elettronici', Icon: '📵', description: 'Evita schermi almeno 1 ora prima di dormire.', points: 10 },
            { id: 'sl1_d_4', title: 'Fitoterapici (fase 1)', Icon: '🌿', description: 'Assunzione di rimedi naturali se indicati.', points: 15 },
            { id: 'sl1_d_5', title: 'Rilassamento Muscolare', Icon: '🛌', description: 'Esercizi di rilassamento per 10–15 minuti.', points: 10 },
            { id: 'sl1_d_6', title: 'No Caffeina', Icon: '☕🚫', description: 'Evita caffè e tè nel pomeriggio e sera.', points: 10 }
        ]
    },
    sleep_level_2: {
        id: 'sleep_level_2',
        name: 'Missione Sonno Giornaliera: Livello 2',
        subtitle: 'Sogno Calmo',
        description: 'Attività focalizzate sul rilassamento profondo per migliorare la qualità del riposo notturno.',
        Icon: '🌠',
        numWeeks: 10,
        dailyTarget: 40,
        dailyMaxTarget: 60,
        unlocksAt: 1500,
        dependsOn: 'sleep_level_1',
        weekly: [],
        daily: [
            { id: 'sl2_d_1', title: 'Rilassamento Muscolare Progressivo', Icon: '🛌', description: '20 minuti di rilascio graduale della tensione muscolare.', points: 15 },
            { id: 'sl2_d_2', title: 'Musica Rilassante', Icon: '🎵', description: 'Ascolta musica tranquilla per 20–30 minuti prima di dormire.', points: 10 },
            { id: 'sl2_d_3', title: 'Fitoterapici (fase 2)', Icon: '🌿', description: 'Assunzione di rimedi naturali se indicati per la fase 2 del sonno.', points: 15 },
            { id: 'sl2_d_4', title: 'Visualizzazione Tranquilla', Icon: '🌅', description: 'Immagina un luogo sereno per 10–15 minuti.', points: 15 },
            { id: 'sl2_d_5', title: 'Bagno Caldo Serale', Icon: '🛁', description: '30 minuti di bagno rilassante prima di dormire.', points: 10 }
        ]
    },
    sleep_level_3: {
        id: 'sleep_level_3',
        name: 'Missione Sonno Giornaliera: Livello 3',
        subtitle: 'Notte Magica',
        description: 'Include tutte le Attività giornaliere avanzate quali meditazione profonda e tecniche di rilassamento per un riposo ottimale.',
        Icon: '🌌',
        numWeeks: 10,
        dailyTarget: 45,
        dailyMaxTarget: 60,
        unlocksAt: 2500,
        dependsOn: 'sleep_level_2',
        weekly: [],
        daily: [
            { id: 'sl3_d_1', title: 'Meditazione Guidata per il Sonno', Icon: '🎧', description: '20 minuti di meditazione profonda per favorire il rilassamento.', points: 20 },
            { id: 'sl3_d_2', title: 'Mindfulness Serale', Icon: '🧘', description: '20 minuti di consapevolezza prima di dormire.', points: 15 },
            { id: 'sl3_d_3', title: 'Fitoterapici (fasi 3–4)', Icon: '🌿', description: 'Rimedi naturali per il sonno profondo, se indicati.', points: 15 },
            { id: 'sl3_d_4', title: 'Oli Essenziali di Lavanda', Icon: '🌸', description: '20 minuti di aromaterapia rilassante.', points: 15 },
            { id: 'sl3_d_5', title: 'Stretching Leggero', Icon: '🤸', description: '20 minuti di esercizi dolci prima di coricarsi.', points: 15 },
            { id: 'sl3_d_6', title: 'Visualizzazione Positiva', Icon: '🌅', description: '10 minuti di immagini mentali serene e rassicuranti.', points: 15 }
        ]
    },
    sleep_level_4: {
        id: 'sleep_level_4',
        name: 'Missione Sonno Giornaliera: Livello 4',
        subtitle: 'Sonno Profondo',
        description: 'Include tutte le Attività giornaliere con tecniche avanzate di gestione del sonno come l\'utilizzo di fitoterapici e routine di rilassamento complesse per garantire un sonno ristoratore.',
        Icon: '🌙',
        numWeeks: 10,
        dailyTarget: 55,
        dailyMaxTarget: 70,
        unlocksAt: 3500,
        dependsOn: 'sleep_level_3',
        weekly: [],
        daily: [
            { id: 'sl4_d_1', title: 'Diario del Sonno', Icon: '📓', description: 'Monitoraggio quotidiano delle abitudini di sonno.', points: 15 },
            { id: 'sl4_d_2', title: 'Fitoterapici (fase REM)', Icon: '🌿', description: 'Rimedi naturali per migliorare la fase REM, se indicati.', points: 15 },
            { id: 'sl4_d_3', title: 'Yoga Rilassante', Icon: '🧘‍♂️', description: '30 minuti di yoga dolce prima di dormire.', points: 20 },
            { id: 'sl4_d_4', title: 'Rilassamento Profondo', Icon: '🛌', description: '20 minuti di tecniche avanzate di rilassamento.', points: 20 },
            { id: 'sl4_d_5', title: 'Gestione del Tempo', Icon: '⏳', description: 'Tecniche per ridurre lo stress quotidiano e migliorare la routine serale.', points: 15 },
            { id: 'sl4_d_6', title: 'Attività Rilassanti Serali', Icon: '📚', description: 'Lettura, scrittura o attività creative prima di dormire.', points: 15 }
        ]
    },
    anxiety_stress_level_1: {
        id: 'anxiety_stress_level_1',
        name: 'Programma Ansia-Stress: Livello 1',
        subtitle: 'Il Giardino della Serenità',
        description: 'Include tutte le Attività Settimanali per ridurre Ansia e Stress.',
        Icon: '🌿',
        weeklyMinTarget: 200,
        numWeeks: 14,
        daily: [],
        weekly: [
            { id: 'anxiety1_w_1', title: 'Respirazione Profonda', Icon: '🌬️', description: '10–15 minuti di respirazione lenta e consapevole.', points: 10 },
            { id: 'anxiety1_w_2', title: 'Visualizzazione Rilassante', Icon: '🌅', description: 'Immagina un luogo sereno per 10–15 minuti.', points: 10 },
            { id: 'anxiety1_w_3', title: 'Camminata Consapevole', Icon: '🚶', description: '30 minuti focalizzati su respiro e ambiente.', points: 20 },
            { id: 'anxiety1_w_4', title: 'Mindfulness', Icon: '🧘', description: '20 minuti di consapevolezza e presenza mentale.', points: 20 },
            { id: 'anxiety1_w_5', title: 'Bagno con Sali di Epsom', Icon: '🛁', description: '20 minuti per rilassare muscoli e tensione.', points: 30 },
            { id: 'anxiety1_w_6', title: 'Diario delle Emozioni', Icon: '📓', description: 'Scrivi pensieri ed emozioni per 15 minuti al giorno.', points: 20 },
            { id: 'anxiety1_w_7', title: 'Terapia dell’Abbraccio', Icon: '🤗', description: 'Abbraccia una persona cara per almeno 10 minuti.', points: 20 },
            { id: 'anxiety1_w_8', title: 'Aromaterapia', Icon: '🌸', description: 'Usa oli essenziali come lavanda o camomilla.', points: 20 },
            { id: 'anxiety1_w_9', title: 'Progresso Graduale', Icon: '📈', description: 'Pianifica e realizza piccoli obiettivi settimanali.', points: 20 },
            { id: 'anxiety1_w_10', title: 'Coping Positivo', Icon: '👍', description: 'Identifica e pratica tecniche di gestione emotiva.', points: 20 },
            { id: 'anxiety1_w_11', title: 'Gratitudine', Icon: '🙏', description: 'Scrivi 3 cose per cui sei grato ogni giorno.', points: 20 },
            { id: 'anxiety1_w_12', title: 'Musica Rilassante', Icon: '🎵', description: 'Ascolta musica per 20–30 minuti focalizzandoti sul rilassamento.', points: 10 },
            { id: 'anxiety1_w_13', title: 'Massaggio ai Piedi', Icon: '🦶', description: 'Usa una pallina da tennis o da massaggio.', points: 10 },
            { id: 'anxiety1_w_14', title: 'Grounding', Icon: '🌍', description: 'Focalizzati su 5 cose che puoi vedere, toccare, sentire, annusare e gustare.', points: 20 },
            { id: 'anxiety1_w_15', title: 'Espressione Creativa', Icon: '🎨', description: 'Disegna, dipingi, scrivi poesie o racconti.', points: 20 },
            { id: 'anxiety1_w_16', title: 'Giornata di Disconnessione', Icon: '📵', description: 'Trascorri una giornata senza dispositivi elettronici.', points: 30 },
            { id: 'anxiety1_w_17', title: 'Yoga Rilassante', Icon: '🧘‍♀️', description: 'Stretching dolce e respirazione consapevole.', points: 30 },
            { id: 'anxiety1_w_18', title: 'Meditazione Guidata per Ansia', Icon: '🎧', description: 'Ascolta una meditazione guidata specifica per l’ansia.', points: 20 },
            { id: 'anxiety1_w_19', title: 'Biofeedback (Ansia)', Icon: '💓', description: 'Sessione di coerenza cardiaca e monitoraggio.', points: 60 },
            { id: 'anxiety1_w_20', title: 'Tai Chi o Qigong', Icon: '🥋', description: 'Movimenti lenti e controllati per rilassare corpo e mente.', points: 30 },
            { id: 'anxiety1_w_21', title: 'Stimolazione Nervo Vago', Icon: '🧘', description: 'Tecniche vagali per ridurre lo stress.', points: 40 }
        ]
    },
    anxiety_stress_level_2: {
        id: 'anxiety_stress_level_2',
        name: 'Programma Ansia-Stress: Livello 2',
        subtitle: 'Oasi della Tranquillità',
        description: 'Include Attività Giornaliere più impegnative per migliorare la gestione di ansia e stress.',
        Icon: '🌲',
        dailyTarget: 40,
        unlocksAt: 2000,
        dependsOn: 'anxiety_stress_level_1',
        numWeeks: 10,
        daily: [
            { id: 'anxiety2_d_1', title: 'Sessione di Mindfulness (20 minuti)', Icon: '🧘', description: 'Pratiche di consapevolezza e presenza mentale.', points: 20 },
            { id: 'anxiety2_d_2', title: 'Bagno con Sali di Epsom (20 minuti)', Icon: '🛁', description: 'Rilassa i muscoli e allevia la tensione.', points: 10 },
            { id: 'anxiety2_d_3', title: 'Terapia dell’Abbraccio (10 minuti)', Icon: '🤗', description: 'Abbraccia una persona cara per almeno 10 minuti.', points: 5 },
            { id: 'anxiety2_d_4', title: 'Aromaterapia (20 minuti)', Icon: '🌸', description: 'Usa oli essenziali come lavanda o camomilla.', points: 10 },
            { id: 'anxiety2_d_5', title: 'Grounding (cinque sensi)', Icon: '🌍', description: 'Focalizzati su ciò che puoi vedere, toccare, sentire, annusare e gustare.', points: 20 }
        ],
        weekly: []
    },
     anxiety_stress_level_3: {
        id: 'anxiety_stress_level_3',
        name: 'Programma Ansia-Stress: Livello 3',
        subtitle: 'Super Zen',
        description: 'Include Attività Giornaliere più avanzate per una gestione ottimale di ansia e stress.',
        Icon: '🕉️',
        dailyTarget: 60,
        unlocksAt: 2500,
        dependsOn: 'anxiety_stress_level_2',
        numWeeks: 10,
        daily: [
            { id: 'anxiety3_d_1', title: 'Tecniche di Coping Positivo', Icon: '👍', description: 'Identifica e pratica strategie di gestione emotiva e resilienza.', points: 20 },
            { id: 'anxiety3_d_2', title: 'Espressione Creativa', Icon: '🎨', description: 'Disegna, dipingi, scrivi poesie o racconti per liberare le emozioni.', points: 20 },
            { id: 'anxiety3_d_3', title: 'Giornata di Disconnessione', Icon: '📵', description: 'Trascorri una giornata senza dispositivi elettronici.', points: 20 },
            { id: 'anxiety3_d_4', title: 'Meditazione Guidata per Ansia', Icon: '🎧', description: 'Ascolta una meditazione guidata specifica per l’ansia (20 minuti).', points: 20 },
            { id: 'anxiety3_d_5', title: 'Biofeedback per Ansia', Icon: '💓', description: 'Sessione di coerenza cardiaca e monitoraggio per ridurre lo stress.', points: 20 }
        ],
        weekly: []
    },
    activity_gold: {
        id: 'activity_gold',
        name: 'Sempre Giovani – Livello Gold',
        subtitle: 'Missione Attività Fisica Settimanale',
        description: 'Attività per over 65 con focus su mobilità, forza e resistenza. Sicurezza ed efficacia per il benessere quotidiano.',
        Icon: '🌟',
        numWeeks: 14,
        weeklyMinTarget: 65,
        weeklyMaxTarget: 150,
        daily: [],
        weekly: [
            { id: 'ag_w_1', title: 'Passeggiata Attiva', Icon: '🚶', description: '30 minuti a ritmo moderato.', points: 30 },
            { id: 'ag_w_2', title: 'Yoga Dolce', Icon: '🧘‍♀️', description: '45 minuti di esercizi dolci e respirazione.', points: 30 },
            { id: 'ag_w_3', title: 'Cyclette', Icon: '🚴', description: '20–30 minuti a ritmo moderato.', points: 40 },
            { id: 'ag_w_4', title: 'Resistenza Leggera', Icon: '🏋️', description: '20 minuti di esercizi con pesi leggeri o elastici.', points: 40 },
            { id: 'ag_w_5', title: 'Camminata in Natura', Icon: '🌳', description: '45 minuti all’aperto, in ambiente naturale.', points: 45 },
            { id: 'ag_w_6', title: 'Ginnastica in Acqua', Icon: '🏊', description: '30 minuti di esercizi in piscina.', points: 40 },
            { id: 'ag_w_7', title: 'Stretching e Mobilità', Icon: '🤸', description: '20–30 minuti di esercizi di flessibilità e mobilità articolare.', points: 25 },
            { id: 'ag_w_8', title: 'Zona 2 – Ciclismo o Camminata', Icon: '🚵', description: '45 minuti a ritmo moderato, 2 volte a settimana.', points: 60 },
            { id: 'ag_w_9', title: 'Nuoto Moderato', Icon: '🏊', description: '20 minuti di nuoto a ritmo costante.', points: 45 }
        ]
    },
    activity_sprint_1: {
        id: 'activity_sprint_1',
        name: 'Inizio Sprint – Livello 1',
        subtitle: 'Missione Attività Fisica Settimanale',
        description: 'Attività per iniziare il tuo percorso sportivo, con focus su camminata, resistenza e mobilità. Ideale per i più giovani o già allenati.',
        Icon: '🏃‍♂️',
        numWeeks: 14,
        weeklyMinTarget: 65,
        weeklyMaxTarget: 100,
        daily: [],
        weekly: [
            { id: 'as1_w_1', title: 'Camminata Veloce', Icon: '🚶‍♂️', description: '30 minuti a passo sostenuto.', points: 50 },
            { id: 'as1_w_2', title: 'Circuito di Resistenza', Icon: '🏋️‍♀️', description: 'Pesi leggeri, 3 set da 12 ripetizioni.', points: 60 },
            { id: 'as1_w_3', title: 'Yoga Dinamico', Icon: '🧘', description: '60 minuti di yoga attivo e fluido.', points: 50 },
            { id: 'as1_w_4', title: 'Nuoto', Icon: '🏊', description: '30 minuti a ritmo moderato.', points: 50 },
            { id: 'as1_w_5', title: 'Stretching e Mobilità', Icon: '🤸‍♂️', description: '20 minuti di esercizi per flessibilità e articolazioni.', points: 30 },
            { id: 'as1_w_6', title: 'Cyclette', Icon: '🚴', description: '30 minuti a ritmo costante.', points: 40 }
        ]
    },
    activity_sprint_2: {
        id: 'activity_sprint_2',
        name: 'Energia in Movimento – Livello 2',
        subtitle: 'Missione Attività Fisica Settimanale',
        description: 'Attività più avanzate per aumentare forza e resistenza. Ideale per chi è già allenato. Livello intermedio.',
        Icon: '🏋️‍♀️',
        numWeeks: 14,
        weeklyMinTarget: 100,
        weeklyMaxTarget: 160,
        unlocksAt: 1500,
        dependsOn: 'activity_sprint_1',
        daily: [],
        weekly: [
            { id: 'as2_w_1', title: 'Corsa Leggera', Icon: '🏃‍♂️', description: '30 minuti di corsa a ritmo costante.', points: 40 },
            { id: 'as2_w_2', title: 'Circuito Forza', Icon: '🏋️‍♂️', description: 'Pesi medi, 4 set da 10 ripetizioni.', points: 50 },
            { id: 'as2_w_3', title: 'HIIT', Icon: '💪', description: '20 minuti di allenamento ad alta intensità a intervalli.', points: 80 },
            { id: 'as2_w_4', title: 'Pilates', Icon: '🧘‍♀️', description: '60 minuti di esercizi per postura, core e flessibilità.', points: 40 },
            { id: 'as2_w_5', title: 'Nuoto Intenso', Icon: '🏊‍♂️', description: '45 minuti di nuoto a ritmo sostenuto.', points: 60 }
        ]
    },
    activity_sprint_3: {
        id: 'activity_sprint_3',
        name: 'Eccellenza Atletica – Livello 3',
        subtitle: 'Missione Attività Fisica Settimanale',
        description: 'Attività avanzate ad alta intensità per performance massime. Livello avanzato.',
        Icon: '🏅',
        numWeeks: 14,
        weeklyMinTarget: 100,
        weeklyMaxTarget: 180,
        unlocksAt: 1500,
        dependsOn: 'activity_sprint_2',
        daily: [],
        weekly: [
            { id: 'as3_w_1', title: 'Corsa Intensa', Icon: '🏃‍♀️', description: '45 minuti di corsa a ritmo sostenuto.', points: 30 },
            { id: 'as3_w_2', title: 'Allenamento Pesi Pesanti', Icon: '🏋️‍♂️', description: '5 set da 8 ripetizioni con carico elevato.', points: 40 },
            { id: 'as3_w_3', title: 'HIIT', Icon: '💥', description: '30 minuti di allenamento ad alta intensità a intervalli.', points: 40 },
            { id: 'as3_w_4', title: 'Yoga di Potenza', Icon: '🧘‍♂️', description: '75 minuti di yoga intensivo per forza e resistenza.', points: 30 },
            { id: 'as3_w_5', title: 'Nuoto a Stile Libero', Icon: '🏊‍♀️', description: '60 minuti di nuoto continuo a ritmo sostenuto.', points: 40 }
        ]
    },
    stress: {
        id: 'stress',
        name: 'Stress Management',
        description: 'Missioni mirate a ridurre lo stress, trovare equilibrio e coltivare la calma nella vita quotidiana.',
        subtitle: 'La Settimana del Successo',
        Icon: '🧘‍♀️',
        isSmart: true,
        numWeeks: 10,
        dailyTarget: 50,
        weeklyMinTarget: 350,
        daily: [
            { id: 'stress_d_1', title: 'Respirazione Profonda', Icon: '🌬️', description: '5 minuti di respirazione diaframmatica per calmare il sistema nervoso.', points: 15 },
            { id: 'stress_d_2', title: 'Pausa Consapevole', Icon: '⏸️', description: 'Ogni 90 minuti, fai una pausa di 2 minuti lontano dagli schermi.', points: 10 },
            { id: 'stress_d_3', title: 'Diario della Gratitudine', Icon: '🙏', description: 'Scrivi 3 cose per cui sei grato oggi.', points: 10 },
            { id: 'stress_d_4', title: 'Movimento Dolce', Icon: '🚶‍♀️', description: '15 minuti di stretching leggero o camminata lenta.', points: 10 },
            { id: 'stress_d_5', title: 'Tisana Rilassante', Icon: '🍵', description: 'Bevi una tisana (camomilla, melissa) prima di dormire.', points: 5 }
        ],
        weekly: [
            { id: 'stress_w_1', title: 'Meditazione o Yoga', Icon: '🧘', description: 'Dedica 30 minuti a una sessione di yoga o meditazione guidata.', points: 100 },
            { id: 'stress_w_2', title: 'Tempo nella Natura', Icon: '🌳', description: 'Trascorri almeno 1 ora in un parco, bosco o al mare.', points: 150 },
            { id: 'stress_w_3', title: 'Hobby De-Stress', Icon: '🎨', description: 'Dedica 1 ora a un hobby che ti rilassa e ti piace (senza schermi).', points: 100 }
        ]
    },
    performance: {
        id: 'performance',
        name: 'Programma Performance',
        description: 'Massimizza la tua energia fisica e mentale, migliora la concentrazione e raggiungi i tuoi obiettivi con più efficacia.',
        subtitle: 'La Settimana del Successo',
        Icon: '🚀',
        isSmart: true,
        numWeeks: 10,
        dailyTarget: 55,
        weeklyMinTarget: 350,
        daily: [
            { id: 'perf_d_1', title: 'Colazione Energetica', Icon: '🍳', description: 'Fai una colazione ricca di proteine e grassi sani.', points: 10 },
            { id: 'perf_d_2', title: 'Idratazione Strategica', Icon: '💧', description: 'Bevi un bicchiere d\'acqua ogni ora. Obiettivo: 2 litri.', points: 10 },
            { id: 'perf_d_3', title: 'Allenamento Focus', Icon: '🏋️', description: '30 minuti di attività fisica mirata (corsa, pesi, HIIT).', points: 20 },
            { id: 'perf_d_4', title: 'Micro-Pausa Attiva', Icon: '🏃', description: 'Fai 5 minuti di stretching o camminata ogni 90 minuti di lavoro seduto.', points: 5 },
            { id: 'perf_d_5', title: 'Pianificazione del Domani', Icon: '📝', description: 'Dedica 5 minuti la sera a pianificare le 3 priorità del giorno dopo.', points: 10 }
        ],
        weekly: [
            { id: 'perf_w_1', title: 'Allenamento Intenso', Icon: '🔥', description: 'Completa 2 sessioni di allenamento ad alta intensità (HIIT).', points: 150 },
            { id: 'perf_w_2', title: 'Apprendimento Attivo', Icon: '🧠', description: 'Dedica 1 ora all\'apprendimento di una nuova abilità o argomento.', points: 100 },
            { id: 'perf_w_3', title: 'Revisione Settimanale', Icon: '📈', description: 'Rivedi i progressi della settimana e fissa gli obiettivi per la prossima.', points: 100 }
        ]
    },
    longevity: {
        id: 'longevity',
        name: 'Programma Longevità',
        description: "Adotta abitudini basate sulla scienza per promuovere un invecchiamento sano, mantenere la vitalità e prevenire le malattie.",
        subtitle: 'La Settimana del Successo',
        Icon: '⏳',
        isSmart: true,
        numWeeks: 10,
        dailyTarget: 45,
        weeklyMinTarget: 400,
        daily: [
            { id: 'longev_d_1', title: 'Dieta Antiossidante', Icon: '🍇', description: 'Consuma almeno 2 porzioni di frutti di bosco, verdure a foglia scura o tè verde.', points: 10 },
            { id: 'longev_d_2', title: '10.000 Passi', Icon: '👟', description: 'Raggiungi l\'obiettivo di 10.000 passi durante la giornata.', points: 15 },
            { id: 'longev_d_3', title: 'Grassi Sani', Icon: '🥑', description: 'Includi una fonte di grassi sani (avocado, noci, olio EVO) nei tuoi pasti.', points: 10 },
            { id: 'longev_d_4', title: 'Allenamento Mentale', Icon: '🧠', description: 'Dedica 15 minuti ad attività che sfidano la mente (puzzle, lettura complessa, nuova lingua).', points: 10 }
        ],
        weekly: [
            { id: 'longev_w_1', title: 'Forza Muscolare', Icon: '💪', description: 'Completa 2 sessioni di allenamento con i pesi per mantenere la massa muscolare.', points: 150 },
            { id: 'longev_w_2', title: 'Connessione Sociale', Icon: '🧑‍🤝‍🧑', description: 'Passa del tempo di qualità e significativo con amici o familiari.', points: 100 },
            { id: 'longev_w_3', title: 'Legumi Power', Icon: '🌱', description: 'Consuma legumi (fagioli, lenticchie, ceci) almeno 3 volte a settimana.', points: 100 },
            { id: 'longev_w_4', title: 'Finestra Alimentare', Icon: '⌛', description: 'Prova a concentrare i pasti in una finestra di 8-10 ore.', points: 50 }
        ]
    }
};