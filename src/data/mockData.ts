export interface DistrictConstituencyMap {
  [district: string]: string[];
}

export const TN_DISTRICTS_DATA: DistrictConstituencyMap = {
  "Salem (சேலம்)": [
    "சேலம் மேற்கு (Salem West)",
    "சேலம் வடக்கு (Salem North)",
    "சேலம் தெற்கு (Salem South)",
    "வீரபாண்டி (Veerapandi)",
    "மேட்டூர் (Mettur)",
    "ஓமலூர் (Omalur)",
    "எடப்பாடி (Edappadi)",
    "சங்ககிரி (Sankari)",
    "ஆத்தூர் (Attur)",
    "கெங்கவல்லி (Gangavalli)",
    "ஏற்காடு (Yercaud)",
  ],
  "Coimbatore (கோயம்புத்தூர்)": [
    "கோயம்புத்தூர் வடக்கு (Coimbatore North)",
    "கோயம்புத்தூர் தெற்கு (Coimbatore South)",
    "சிங்காநல்லூர் (Singanallur)",
    "சூலூர் (Sulur)",
    "கவுண்டம்பாளையம் (Kavundampalayam)",
    "தொண்டாமுத்தூர் (Thondamuthur)",
    "பொள்ளாச்சி (Pollachi)",
    "வால்பாறை (Valparai)",
    "மேட்டுப்பாளையம் (Mettupalayam)",
  ],
  "Tiruppur (திருப்பூர்)": [
    "திருப்பூர் வடக்கு (Tiruppur North)",
    "திருப்பூர் தெற்கு (Tiruppur South)",
    "அவிநாசி (Avinashi)",
    "பல்லடம் (Palladam)",
    "உடுமலைப்பேட்டை (Udumalaipettai)",
    "மடத்துக்குளம் (Madathukulam)",
    "தாராபுரம் (Dharapuram)",
    "காங்கேயம் (Kangeyam)",
  ],
  "Erode (ஈரோடு)": [
    "ஈரோடு கிழக்கு (Erode East)",
    "ஈரோடு மேற்கு (Erode West)",
    "மொடக்குறிச்சி (Modakkurichi)",
    "பெருந்துறை (Perundurai)",
    "பவானி (Bhavani)",
    "அந்தியூர் (Anthiyur)",
    "கோபிசெட்டிபாளையம் (Gobichettipalayam)",
    "பவானிசாகர் (Bhavanisagar)",
  ],
  "Dharmapuri (தர்மபுரி)": [
    "தர்மபுரி (Dharmapuri)",
    "பாலக்கோடு (Palacode)",
    "பென்னாகரம் (Pennagaram)",
    "பாப்பிரெட்டிப்பட்டி (Pappireddippatti)",
    "அரூர் (Harur)",
  ],
  "Krishnagiri (கிருஷ்ணகிரி)": [
    "கிருஷ்ணகிரி (Krishnagiri)",
    "ஓசூர் (Hosur)",
    "வேப்பனஹள்ளி (Veppanahalli)",
    "பர்கூர் (Bargur)",
    "ஊத்தங்கரை (Uthangarai)",
    "தளி (Thalli)",
  ],
  "Namakkal (நாமக்கல்)": [
    "நாமக்கல் (Namakkal)",
    "இராசிபுரம் (Rasipuram)",
    "பரமத்தி வேலூர் (Paramathi-Velur)",
    "திருச்செங்கோடு (Tiruchengodu)",
    "குமாரபாளையம் (Kumarapalayam)",
    "சேந்தமங்கலம் (Senthamangalam)",
  ],
  "Dindigul (திண்டுக்கல்)": [
    "திண்டுக்கல் (Dindigul)",
    "பழனி (Palani)",
    "ஒட்டன்சத்திரம் (Oddanchatram)",
    "ஆத்தூர் (Athoor)",
    "நிலக்கோட்டை (Nilakkottai)",
    "நத்தம் (Natham)",
    "வேடசந்தூர் (Vedasandur)",
  ],
  "Vellore (வேலூர்)": [
    "வேலூர் (Vellore)",
    "அணைக்கட்டு (Anaikattu)",
    "காட்பாடி (Katpadi)",
    "குடியாத்தம் (Gudiyattam)",
    "கே.வி.குப்பம் (K.V. Kuppam)",
  ],
  "Tiruvannamalai (திருவண்ணாமலை)": [
    "திருவண்ணாமலை (Tiruvannamalai)",
    "செங்கம் (Chengam)",
    "கலசப்பாக்கம் (Kalasapakkam)",
    "போளூர் (Polur)",
    "ஆரணி (Arani)",
    "செய்யாறு (Cheyyar)",
    "வந்தவாசி (Vandavasi)",
  ],
  "Chennai (சென்னை)": [
    "அண்ணா நகர் (Anna Nagar)",
    "மயிலாப்பூர் (Mylapore)",
    "தி.நகர் (T. Nagar)",
    "வேளச்சேரி (Velachery)",
    "சைதாப்பேட்டை (Saidapet)",
    "ராயபுரம் (Royapuram)",
  ],
};

export const KULAM_OPTIONS = [
  "அத்தி குலம் (Athi Kulam)",
  "முல்லை குலம் (Mullai Kulam)",
  "கண்ணங்குலம் (Kannankulam)",
  "செங்குலம் (Sengkulam)",
  "சேரகுலம் (Cherakulam)",
  "வேலங்குலம் (Velangkulam)",
  "மல்லிகை குலம் (Malligai Kulam)",
  "மயில்குலம் (Mayilkulam)",
  "பொன்னங்குலம் (Ponnangkulam)",
  "மற்றவை (Other)",
];

export const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export interface MatrimonyItem {
  id: string;
  name: string;
  gender: "GROOM" | "BRIDE";
  age: number;
  dob: string;
  height: string;
  education: string;
  occupation: string;
  workLocation: string;
  district: string;
  kulam: string;
  star: string;
  rasi: string;
  photoUrl: string;
  profileCreatedBy: string;
  verified: boolean;
}

export const SAMPLE_MATRIMONY: MatrimonyItem[] = [
  {
    id: "MAT-2026-001",
    name: "Dr. கார்த்திகேயன் (Dr. Karthikeyan)",
    gender: "GROOM",
    age: 28,
    dob: "14-Aug-1998",
    height: "5' 10\"",
    education: "MBBS, MD (General Medicine)",
    occupation: "Chief Resident Physician",
    workLocation: "Coimbatore",
    district: "Salem (சேலம்)",
    kulam: "அத்தி குலம் (Athi Kulam)",
    star: "மகம் (Magham)",
    rasi: "சிம்மம் (Simha)",
    photoUrl: "/images/member_avatar.png",
    profileCreatedBy: "பெற்றோர் (Parents)",
    verified: true,
  },
  {
    id: "MAT-2026-002",
    name: "பிரியதர்ஷினி (Priyadarshini)",
    gender: "BRIDE",
    age: 25,
    dob: "22-Nov-2001",
    height: "5' 5\"",
    education: "B.E. Computer Science, M.S",
    occupation: "Senior Cloud Software Engineer",
    workLocation: "Bangalore",
    district: "Erode (ஈரோடு)",
    kulam: "முல்லை குலம் (Mullai Kulam)",
    star: "ரோகிணி (Rohini)",
    rasi: "ரிஷபம் (Rishaba)",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    profileCreatedBy: "பெற்றோர் (Parents)",
    verified: true,
  },
  {
    id: "MAT-2026-003",
    name: "தினேஷ் குமார் (Dinesh Kumar)",
    gender: "GROOM",
    age: 29,
    dob: "05-May-1997",
    height: "5' 9\"",
    education: "B.Tech Agriculture, MBA",
    occupation: "Agri-Tech Business & Farmland Management",
    workLocation: "Tiruppur",
    district: "Tiruppur (திருப்பூர்)",
    kulam: "கண்ணங்குலம் (Kannankulam)",
    star: "அஸ்வினி (Aswini)",
    rasi: "மேஷம் (Mesha)",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    profileCreatedBy: "சுயவிவரம் (Self)",
    verified: true,
  },
  {
    id: "MAT-2026-004",
    name: "சௌமியா (Sowmiya M.Sc)",
    gender: "BRIDE",
    age: 24,
    dob: "10-Feb-2002",
    height: "5' 4\"",
    education: "M.Sc Mathematics, B.Ed",
    occupation: "Higher Secondary Teacher (Govt. Aided)",
    workLocation: "Dharmapuri",
    district: "Dharmapuri (தர்மபுரி)",
    kulam: "செங்குலம் (Sengkulam)",
    star: "உத்திராடம் (Uthiradam)",
    rasi: "தனுசு (Dhanusu)",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    profileCreatedBy: "பெற்றோர் (Parents)",
    verified: true,
  },
];

export interface MarketItem {
  id: string;
  title: string;
  category: "LIVESTOCK" | "HANDLOOM" | "AGRICULTURE" | "HANDICRAFTS";
  priceText: string;
  priceType: "FIXED" | "NEGOTIABLE";
  district: string;
  sellerName: string;
  sellerMobile: string;
  description: string;
  inStock: boolean;
  imageUrl: string;
}

export const SAMPLE_MARKETPLACE: MarketItem[] = [
  {
    id: "MKT-101",
    title: "செம்மறி ஆட்டுக்குட்டிகள் மற்றும் தாய் ஆடுகள் (Salem Native Sheep Flock)",
    category: "LIVESTOCK",
    priceText: "₹ 8,500 / ஆடு",
    priceType: "NEGOTIABLE",
    district: "Salem (சேலம்)",
    sellerName: "ஆர். பழனிசாமி (R. Palanisamy)",
    sellerMobile: "+91 98421 54321",
    description: "நாட்டு இனம் செம்மறி ஆடுகள். சிறந்த நோயெதிர்ப்பு சக்தி மற்றும் ஆரோக்கியமான எடை வளர்ச்சி உடையவை. பண்ணை தொடங்குவோருக்கு உகந்தது.",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "MKT-102",
    title: "பாரம்பரிய தூய கம்பளிப் போர்வை (Handwoven Pure Wool Kambli Blanket)",
    category: "HANDLOOM",
    priceText: "₹ 3,200",
    priceType: "FIXED",
    district: "Krishnagiri (கிருஷ்ணகிரி)",
    sellerName: "குறும்பர் கைத்தறி உற்பத்தியாளர் கூட்டுறவு சங்கம்",
    sellerMobile: "+91 94432 87654",
    description: "100% இயற்கை செம்மறி ஆட்டு ரோமத்தில் பாரம்பரிய தறியில் நெய்யப்பட்ட குளிர் தாங்கும் இயற்கை கம்பளி போர்வை. ஆயுள் முழுக்க உழைக்கும் தரம்.",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "MKT-103",
    title: "இயற்கை மஞ்சள் தூள் & நாட்டு வெல்லம் (Organic Turmeric & Jaggery)",
    category: "AGRICULTURE",
    priceText: "₹ 240 / கிலோ",
    priceType: "FIXED",
    district: "Erode (ஈரோடு)",
    sellerName: "முத்துவேல் இயற்கை பண்ணை",
    sellerMobile: "+91 97890 12345",
    description: "ரசாயன உரம் இன்றி குறும்பர் விவசாயிகள் நேரடியாக பயிரிட்ட உயர் குர்குமின் கொண்ட நாட்டு விரலி மஞ்சள் மற்றும் தூய பனை வெல்லம்.",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "MKT-104",
    title: "பாரம்பரிய மரச் செக்கு நல்லெண்ணெய் (Cold-Pressed Sesame Oil)",
    category: "AGRICULTURE",
    priceText: "₹ 480 / லிட்டர்",
    priceType: "FIXED",
    district: "Dindigul (திண்டுக்கல்)",
    sellerName: "வெள்ளியங்கிரி மரச்செக்கு",
    sellerMobile: "+91 96290 98765",
    description: "நாட்டு எள்ளிலிருந்து வாகை மரச்செக்கில் பிழியப்பட்ட மணமும் சுவையும் மாறாத பாரம்பரிய தூய நல்லெண்ணெய்.",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80",
  },
];

export interface JobItem {
  id: string;
  title: string;
  company: string;
  jobType: "FULL_TIME" | "PART_TIME" | "CONTRACT";
  category: string;
  district: string;
  salaryText: string;
  experience: string;
  contactMobile: string;
  description: string;
}

export const SAMPLE_JOBS: JobItem[] = [
  {
    id: "JOB-301",
    title: "கணக்காளர் & நிதி மேற்பார்வையாளர் (Accountant & Office Admin)",
    company: "குறும்பர் வேளாண் உற்பத்தியாளர் நிறுவனம் (FPO)",
    jobType: "FULL_TIME",
    category: "Finance & Accounts",
    district: "Salem (சேலம்)",
    salaryText: "₹ 25,000 - ₹ 35,000 / மாதம்",
    experience: "1 - 3 ஆண்டுகள்",
    contactMobile: "+91 98421 99999",
    description: "Tally Prime, GST filing மற்றும் கூட்டுறவு சங்க கணக்கு வழக்குகள் கையாள தெரிந்த குறும்பர் சமூக இளைஞர்கள் விண்ணப்பிக்கலாம்.",
  },
  {
    id: "JOB-302",
    title: "கள மேற்பார்வையாளர் - கால்நடை பண்ணை (Farm & Dairy Supervisor)",
    company: "கிரீன் பாஸ்டர்ஸ் அக்ரோ பண்ணை",
    jobType: "FULL_TIME",
    category: "Agriculture & Livestock",
    district: "Coimbatore (கோயம்புத்தூர்)",
    salaryText: "₹ 22,000 - ₹ 30,000 / மாதம் + தங்குமிடம்",
    experience: "0 - 2 ஆண்டுகள்",
    contactMobile: "+91 97890 88888",
    description: "செம்மறி ஆடு மற்றும் கறவை மாடுகள் பராமரிப்பு, தீவன மேலாண்மை மேற்பார்வை செய்ய உற்சாகமான நபர்கள் தேவை.",
  },
  {
    id: "JOB-303",
    title: "மென்பொருள் பொறியாளர் (Full Stack Web Developer)",
    company: "நெக்ஸ்ட்ஜென் டெக் சொல்யூஷன்ஸ்",
    jobType: "FULL_TIME",
    category: "Information Technology",
    district: "Tiruppur / Remote (திருப்பூர்)",
    salaryText: "₹ 40,000 - ₹ 65,000 / மாதம்",
    experience: "2+ ஆண்டுகள் (React/Node/Next.js)",
    contactMobile: "+91 94432 77777",
    description: "நமது சமூகத்தை சேர்ந்த பி.இ/பி.சி.ஏ/எம்.சி.ஏ பட்டதாரி இளைஞர்களுக்கு முன்னுரிமை வழங்கப்படும். தொலைதூரப் பணி (Remote) வாய்ப்பும் உண்டு.",
  },
];

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "FESTIVAL" | "SCHOLARSHIP" | "MEETING" | "WELFARE";
  summary: string;
  imageUrl: string;
  fullDate: string;
}

export const SAMPLE_NEWS: NewsItem[] = [
  {
    id: "NEWS-01",
    title: "ஸ்ரீ பீரேஸ்வர சுவாமி & மல்லிகார்ஜுன சுவாமி மகா கும்பாபிஷேக விழா அழைப்பிதழ்",
    date: "12 மார்ச் 2026",
    category: "FESTIVAL",
    summary: "நமது குறும்பர் சமூக குலதெய்வ திருத்தலத்தில் நடைபெற உள்ள மகா கும்பாபிஷேக திருவிழா. அனைத்து மாவட்ட சமுதாய சொந்தங்களும் குடும்பத்துடன் பங்கேற்று நலம் பெற வேண்டுகிறோம்.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80",
    fullDate: "March 12, 2026",
  },
  {
    id: "NEWS-02",
    title: "2026-ஆம் கல்வி ஆண்டு: குறும்பர் சமூக மாணவர்களுக்கான கல்வி உதவித்தொகை விண்ணப்பம் துவக்கம்",
    date: "28 பிப்ரவரி 2026",
    category: "SCHOLARSHIP",
    summary: "10 மற்றும் 12-ஆம் வகுப்பு பொதுத்தேர்வில் 85% மேல் மதிப்பெண் பெற்ற மற்றும் மருத்துவம்/பொறியியல் பயிலும் சமூக ஏழை மாணவர்களுக்கு ₹25,000 வரை கல்வி உதவித்தொகை.",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    fullDate: "February 28, 2026",
  },
  {
    id: "NEWS-03",
    title: "தமிழ்நாடு மாநில அளவிலான குறும்பர் சமூக மாநாடு & மாபெரும் இலவச திருமண சுயம்வரம்",
    date: "15 ஏப்ரல் 2026",
    category: "MEETING",
    summary: "கோயம்புத்தூரில் 38 மாவட்ட பிரதிநிதிகள் மற்றும் இளைஞரணி பங்கேற்கும் மாநில மாநாடு. அன்றைய தினம் 500+ வரன்களுக்கான இலவச சுயம்வர மேடை அமைக்கப்படுகிறது.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80",
    fullDate: "April 15, 2026",
  },
];
