/* =====================================================================
   ΠΕΡΙΕΧΟΜΕΝΟ ΤΗΣ ΓΚΑΛΕΡΙ — sotiriadromou.gr
   =====================================================================

   ➕ ΓΙΑ ΝΑ ΠΡΟΣΘΕΣΕΤΕ ΝΕΟ ΕΡΓΟ:

   1. Βάλτε τη φωτογραφία στον φάκελο  images/erga/  (π.χ. to-neo-ergo.jpg)
   2. Αντιγράψτε ένα μπλοκ { ... }, αλλάξτε τα στοιχεία και βάλτε το
      στην ΑΡΧΗ της λίστας ARTWORKS (τα πρώτα εμφανίζονται πρώτα).

   Πεδία:
     id:       μοναδικό όνομα με λατινικά, χωρίς κενά (π.χ. "to-neo-ergo")
     title:    ο τίτλος που εμφανίζεται
     image:    το όνομα του αρχείου μέσα στο images/erga/
     category: μία από τις παρακάτω CATEGORIES
     tags:     προαιρετικές ετικέτες
     story:    προαιρετική ιστορία — γράψτε ελεύθερα ανάμεσα στα ` `
               (κενή γραμμή = νέα παράγραφος). Αν δεν υπάρχει, αφήστε "".
   ===================================================================== */

const CATEGORIES = ["Πρόσωπα", "Καθημερινότητα", "Τοπία", "Φύση"];

const ARTWORKS = [

  {
    id: "nekri-fysi-me-violi",
    title: "Νεκρή φύση με βιολί",
    image: "nekri-fysi-me-violi.jpg",
    category: "Φύση",
    tags: ["ελαιογραφία", "νεκρή φύση", "βιολί", "εκμαγείο"],
    story: `
      Νεκρή φύση με βιολί, γύψινο εκμαγείο, μπουκάλια και φρούτα πάνω σε
      λευκό ύφασμα.
    `,
  },
  {
    id: "anamoni-sto-metro",
    title: "Μετρό",
    image: "anamoni-sto-metro.jpg",
    category: "Καθημερινότητα",
    tags: ["ελαιογραφία", "μετρό", "αστική ζωή"],
    story: `
      Επιβάτες περιμένουν στην αποβάθρα του μετρό. Υπογεγραμμένο
      «Dimitropoulou S. '26 — Metro».
    `,
  },
  {
    id: "stathmos-attiki",
    title: "Σταθμός Αττική",
    image: "stathmos-attiki.jpg",
    category: "Καθημερινότητα",
    tags: ["ελαιογραφία", "μετρό", "σταθμός"],
    story: `
      Η αποβάθρα του σταθμού Αττική με την πινακίδα «Προς Κηφισιά» —
      ένα πλήθος που περιμένει, ο καθένας στον δικό του κόσμο.
    `,
  },
  {
    id: "stin-gkaleri",
    title: "Στην γκαλερί",
    image: "stin-gkaleri.jpg",
    category: "Καθημερινότητα",
    tags: ["ελαιογραφία", "γκαλερί", "εσωτερικό"],
    story: "",
  },
  {
    id: "o-barista",
    title: "Ο μπαρίστα",
    image: "o-barista.jpg",
    category: "Καθημερινότητα",
    tags: ["ελαιογραφία", "καφέ", "πορτρέτο"],
    story: "",
  },
  {
    id: "gonia-tis-athinas",
    title: "Γωνιά της Αθήνας",
    image: "gonia-tis-athinas.jpg",
    category: "Τοπία",
    tags: ["ελαιογραφία", "αστικό τοπίο", "αθήνα"],
    story: "",
  },
  {
    id: "kathimerinotita",
    title: "Καθημερινότητα",
    image: "kathimerinotita.jpg",
    category: "Καθημερινότητα",
    tags: ["γυναίκα", "καθημερινή ζωή"],
    story: `
      Φέρει τον τίτλο «Καθημερινότητα» από το χέρι της ζωγράφου,
      Μάρτης 2022.
    `,
  },
  {
    id: "paradochi",
    title: "Παραδοχή",
    image: "paradochi.jpg",
    category: "Πρόσωπα",
    tags: ["ελαιογραφία", "αυτοπροσωπογραφία", "εργαστήριο"],
    story: `
      Αυτοπροσωπογραφία στο εργαστήριο — με γύψινο εκμαγείο, φρούτα και
      μια μορφή α λα Modigliani στο βάθος. Φέρει τον τίτλο «Παραδοχή» και
      την υπογραφή «Δημητροπούλου Σοφία, 2022 Μάρτης».
    `,
  },
  {
    id: "aisiodoxia",
    title: "Αισιοδοξία",
    image: "aisiodoxia.jpg",
    category: "Πρόσωπα",
    tags: ["ελαιογραφία", "αυτοπροσωπογραφία", "αγιογραφία"],
    story: `
      Αυτοπροσωπογραφία με παλέτα, μπροστά σε βυζαντινές μορφές.
      Φέρει τον τίτλο «Αισιοδοξία» και υπογραφή «Δημητροπούλου Σοφία, 2021».
    `,
  },
  {
    id: "portreto-tis-viktorias",
    title: "Πορτρέτο της Βικτώριας",
    image: "portreto-tis-viktorias.jpg",
    category: "Πρόσωπα",
    tags: ["πορτρέτο", "κορίτσι"],
    story: `
      Φέρει την αφιέρωση «Βικτώρια, Μάιος '22».
    `,
  },
  {
    id: "i-viktoria-me-kotsides",
    title: "Η Βικτώρια με κοτσίδες",
    image: "i-viktoria-me-kotsides.jpg",
    category: "Πρόσωπα",
    tags: ["πορτρέτο", "κορίτσι"],
    story: `
      Φέρει την επιγραφή «Βικτώρια '23».
    `,
  },
  {
    id: "portreto-koritsiou",
    title: "Πορτρέτο κοριτσιού",
    image: "portreto-koritsiou.jpg",
    category: "Πρόσωπα",
    tags: ["τέμπερα", "πορτρέτο", "κορίτσι"],
    story: "",
  },
  {
    id: "gynaika-me-margarites",
    title: "Γυναίκα με μαργαρίτες",
    image: "gynaika-me-margarites.jpg",
    category: "Πρόσωπα",
    tags: ["γυναίκα", "μαργαρίτες", "μαντήλα"],
    story: "",
  },
  {
    id: "gynaika-me-gata",
    title: "Η Δαπάνη",
    image: "gynaika-me-gata.jpg",
    category: "Πρόσωπα",
    tags: ["ελαιογραφία", "γάτα"],
    story: `
      Φέρει τον τίτλο «Η Δαπάνη» και τη χρονολογία 2018.
    `,
  },
  {
    id: "gymno-me-kithara",
    title: "Ματαίωση",
    image: "gymno-me-kithara.jpg",
    category: "Πρόσωπα",
    tags: ["ελαιογραφία", "γυμνό", "κιθάρα"],
    story: `
      Φέρει την επιγραφή «Ματαίωση, 2019».
    `,
  },
  {
    id: "gymno-me-stavro",
    title: "Γυμνό με σταυρό",
    image: "gymno-me-stavro.jpg",
    category: "Πρόσωπα",
    tags: ["ελαιογραφία", "γυμνό"],
    story: "",
  },
  {
    id: "nekri-fysi-me-ekmageio",
    title: "Αναζητήσεις",
    image: "nekri-fysi-me-ekmageio.jpg",
    category: "Φύση",
    tags: ["ελαιογραφία", "νεκρή φύση", "εκμαγείο"],
    story: `
      Νεκρή φύση με γύψινο εκμαγείο και μορφή α λα Modigliani.
      Φέρει την επιγραφή «Αναζητήσεις» και τη χρονολογία «Μάρτης 2022».
    `,
  },
  {
    id: "kitrino-triantafyllo",
    title: "Κίτρινο τριαντάφυλλο",
    image: "kitrino-triantafyllo.jpg",
    category: "Φύση",
    tags: ["γκουάς", "λουλούδια", "νεκρή φύση"],
    story: "",
  },
  {
    id: "neos-me-kleista-matia",
    title: "Νέος με κλειστά μάτια",
    image: "neos-me-kleista-matia.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "πορτρέτο"],
    story: "",
  },
  {
    id: "paidi-se-ypno",
    title: "Παιδί σε ύπνο",
    image: "paidi-se-ypno.jpg",
    category: "Πρόσωπα",
    tags: ["κάρβουνο", "ύπνος", "παιδί"],
    story: "",
  },
  {
    id: "moro-pou-koimatai",
    title: "Μωρό που κοιμάται",
    image: "moro-pou-koimatai.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "μωρό", "ύπνος"],
    story: "",
  },
  {
    id: "spoudi-paidikou-prosopou",
    title: "Σπουδή παιδικού προσώπου",
    image: "spoudi-paidikou-prosopou.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "σκίτσο", "παιδί"],
    story: "",
  },
  {
    id: "portreto-koimomenou-neou",
    title: "Πορτρέτο κοιμώμενου νέου",
    image: "portreto-koimomenou-neou.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "πορτρέτο", "ύπνος"],
    story: "",
  },
  {
    id: "galinios-ypnos",
    title: "Γαλήνιος ύπνος",
    image: "galinios-ypnos.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "ύπνος", "πορτρέτο"],
    story: "",
  },
  {
    id: "skymmeno-vlemma",
    title: "Σκυμμένο βλέμμα",
    image: "skymmeno-vlemma.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "πορτρέτο", "σκίτσο"],
    story: "",
  },
  {
    id: "oneiro-se-chroma",
    title: "Όνειρο σε χρώμα",
    image: "oneiro-se-chroma.jpg",
    category: "Πρόσωπα",
    tags: ["ξυλομπογιές", "ύπνος"],
    story: "",
  },
  {
    id: "ypnos-me-ti-gata",
    title: "Ύπνος με τη γάτα",
    image: "ypnos-me-ti-gata.jpg",
    category: "Καθημερινότητα",
    tags: ["ξυλομπογιές", "ύπνος", "γάτα"],
    story: "",
  },
  {
    id: "koimismeno-profil",
    title: "Κοιμισμένο προφίλ",
    image: "koimismeno-profil.jpg",
    category: "Πρόσωπα",
    tags: ["στυλό", "προφίλ", "ύπνος"],
    story: "",
  },
  {
    id: "prosopo-se-ypno",
    title: "Πρόσωπο σε ύπνο",
    image: "prosopo-se-ypno.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "πορτρέτο", "ύπνος"],
    story: "",
  },
  {
    id: "sto-maxilari",
    title: "Στο μαξιλάρι",
    image: "sto-maxilari.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "πορτρέτο", "ύπνος"],
    story: "",
  },
  {
    id: "koimomeni-me-lyta-mallia",
    title: "Κοιμωμένη με λυτά μαλλιά",
    image: "koimomeni-me-lyta-mallia.jpg",
    category: "Πρόσωπα",
    tags: ["μελάνι", "ύπνος", "σκίτσο"],
    story: "",
  },
  {
    id: "koimomeni-figoura",
    title: "Κοιμώμενη φιγούρα",
    image: "koimomeni-figoura.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "ύπνος", "φιγούρα"],
    story: "",
  },
  {
    id: "to-koimismeno-paidi",
    title: "Το κοιμισμένο παιδί",
    image: "to-koimismeno-paidi.jpg",
    category: "Πρόσωπα",
    tags: ["μελάνι", "παιδί", "ύπνος"],
    story: "",
  },
  {
    id: "stigmi-anapausis",
    title: "Στιγμή ανάπαυσης",
    image: "stigmi-anapausis.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "ύπνος"],
    story: "",
  },
  {
    id: "kefali-germeno-piso",
    title: "Κεφάλι γερμένο πίσω",
    image: "kefali-germeno-piso.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "μελέτη", "προφίλ"],
    story: "",
  },
  {
    id: "kefali-se-anaklisi",
    title: "Κεφάλι σε ανάκλιση",
    image: "kefali-se-anaklisi.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "φιγούρα", "μελέτη"],
    story: "",
  },
  {
    id: "portreto-me-kotso",
    title: "Πορτρέτο με κότσο",
    image: "portreto-me-kotso.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "πορτρέτο"],
    story: "",
  },
  {
    id: "vathys-ypnos",
    title: "Βαθύς ύπνος",
    image: "vathys-ypnos.jpg",
    category: "Πρόσωπα",
    tags: ["κάρβουνο", "ύπνος", "φιγούρα"],
    story: "",
  },
  {
    id: "meleti-koimomenou",
    title: "Μελέτη κοιμώμενου",
    image: "meleti-koimomenou.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "σκίτσο", "ύπνος"],
    story: "",
  },
  {
    id: "prosopo-se-anapausi",
    title: "Πρόσωπο σε ανάπαυση",
    image: "prosopo-se-anapausi.jpg",
    category: "Πρόσωπα",
    tags: ["ακουαρέλα", "μολύβι", "ύπνος"],
    story: "",
  },
  {
    id: "o-koimomenos-andras",
    title: "Ο κοιμώμενος άνδρας",
    image: "o-koimomenos-andras.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "ύπνος"],
    story: "",
  },
  {
    id: "profil-se-anapausi",
    title: "Προφίλ σε ανάπαυση",
    image: "profil-se-anapausi.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "προφίλ", "σκίτσο"],
    story: "",
  },
  {
    id: "deftera-27-8-96",
    title: "Δευτέρα 27-8-96",
    image: "deftera-27-8-96.jpg",
    category: "Πρόσωπα",
    tags: ["μολύβι", "σκίτσο", "ύπνος"],
    story: `
      Σχέδιο με μολύβι σε διπλωμένο χαρτί. Φέρει χειρόγραφη την ημερομηνία
      «Δευτέρα 27-8-96».
    `,
  },
  {
    id: "gata-pou-koimatai",
    title: "Γάτα που κοιμάται",
    image: "gata-pou-koimatai.jpg",
    category: "Φύση",
    tags: ["μολύβι", "γάτα", "σκίτσο"],
    story: "",
  },
  {
    id: "gata-se-anapausi",
    title: "Γάτα σε ανάπαυση",
    image: "gata-se-anapausi.jpg",
    category: "Φύση",
    tags: ["μολύβι", "γάτα", "ζώα"],
    story: "",
  },

];
