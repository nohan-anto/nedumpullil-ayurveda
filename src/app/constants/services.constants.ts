export interface WellnessPackage {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  icon: string;
}

export interface TreatmentArea {
  id: number;
  name: string;
  icon: string;
}

export interface Therapy {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface SpecializedTreatment {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  conditions: string[];
  treatments: string[];
  icon: string;
}

export const WELLNESS_PACKAGES: WellnessPackage[] = [
  {
    id: 1,
    name: 'MARMAJEEVAN',
    subtitle: 'Marma Wellness Programme',
    description: 'Specialised marma treatment programs to reenergize body and strengthen the joints to reduce the effect of ageing and keeping youthfulness.',
    duration: 'Available in 7, 14, 21, 28 and 41 days',
    icon: 'bi-heart-pulse'
  },
  {
    id: 2,
    name: 'LEAN',
    subtitle: 'Weight Reduction Programme',
    description: 'Weight reducing programme to metabolize the body fat and make the body fit by Ayurveda treatments based on individuals body constitution.',
    duration: 'Available in 7, 14, 21, 28 and 41 days',
    icon: 'bi-speedometer2'
  },
  {
    id: 3,
    name: 'EAZZE',
    subtitle: 'Spine and Neck Care Programme',
    description: 'To make the spine healthy and prevent individuals from various spinal aliments like low back ache, cervical spondylitis, slip disc, occupational disorders. Eg: disorders among IT professional.',
    duration: 'Available in 7, 14, 21, 28 and 41 days',
    icon: 'bi-arrows-expand'
  },
  {
    id: 4,
    name: 'REFRESH',
    subtitle: 'Energizing Programme',
    description: 'To enhance longevity and immune modulation programmes based on individual body constitution.',
    duration: 'Available in 7, 14, 21, 28 and 41 days',
    icon: 'bi-lightning-charge'
  },
  {
    id: 5,
    name: 'VARSHABOO',
    subtitle: 'Monsoon Health Care Programme',
    description: 'Specialised monsoon health care programme done during the Malayalam Month (Karkidaka – Monsoon Month). In this package we will give specialised internal and external therapies which strengthen the internal digestive for which in turn strengthen the body which will give year long wellness. These package is designed based on individual body constitution.',
    duration: 'Available in 7, 14, 21 and 28 days',
    icon: 'bi-cloud-rain'
  },
  {
    id: 6,
    name: 'Soorya Kanthi',
    subtitle: 'Skin and Hair Care Programme',
    description: 'Specialised hair and skin and hair and make it healthy and charming with our traditional formulation for internal and external treatment.',
    duration: 'Available in 7, 14, 21 and 28 days',
    icon: 'bi-droplet-fill'
  },
  {
    id: 7,
    name: 'Suputhreeya',
    subtitle: 'For Better Progeny',
    description: 'Specialized package for people planning to get pregnant. As per Ayurveda those who were planning for pregnancy they can undergo preparatory therapy for both male and female partners to get a healthy and intellectual Progeny. These treatments are done based on our year long traditionally handed over medical combinations from our generations. The treatments are designed based on individual body constitution.',
    duration: 'Available in 7, 14, 21, 28 days',
    icon: 'bi-people-fill'
  },
  {
    id: 8,
    name: 'Clear off',
    subtitle: 'Body Purificatory Therapy',
    description: 'Specialised purificatory therapy which removes accumulated toxin in the body through our unhealthy life style and habits which cause ill health or which can lead to diseases later. These packages will be designed on individual body constitution.',
    duration: 'Available in 7, 14, 21 and 28 days',
    icon: 'bi-recycle'
  },
  {
    id: 9,
    name: 'Soubhagya',
    subtitle: 'For Better Beginning',
    description: 'Specialised package of bride and bride groom who were planning for marriage. It includes specialised external and internal therapies which prepare them for a new chapter of life. It is designed base on individual body constitution.',
    duration: 'Available in 7, 14, 21 and 28 days',
    icon: 'bi-heart'
  },
  {
    id: 10,
    name: 'Athletico',
    subtitle: 'Sports Wellness Programme',
    description: 'Specialised treatment designed for sports, game and athletic persons based on the game or item they were performing and which enable them get more strength and prevention of injuries related to specific area were they performing.',
    duration: 'Available in 7, 14, 21 and 28 days',
    icon: 'bi-shield-plus'
  },
  {
    id: 11,
    name: 'PUNARJEEVAN',
    subtitle: 'Geriatric Health Care Program',
    description: 'Specialised Treatment program for Individuals above 60 to get better health and to avoid stress and strain during the old age. This program will be designed based on individual body constitution and their physical health and condition.',
    duration: 'Available in 7, 14, 21, 28 days',
    icon: 'bi-person-walking'
  },
  {
    id: 12,
    name: 'MATRU SHREE',
    subtitle: 'Post Delivery Care for Mother and New Born',
    description: 'Specialized package of post delivery care for Mother and Child with ayurvedic knowledge and time-tested tradition post-delivery care knowledge of post delivery women treatments like oil massage, medicated bathing (Vedhu Kuli), spine care program, abdominal binding, hair and skin care program etc with time tested traditional formulations and medications. Also offer post deliver care for New-born including baby massage with application of herbal paste and special oil for their proper growth, body shape, immunity and hair and skin care',
    duration: 'Customized duration',
    icon: 'bi-gender-female'
  },
  {
    id: 13,
    name: 'MANASHREE',
    subtitle: 'Stress and Strain Reliving Program',
    description: 'Specialized treatment to reduce stress and strain with ayurveda and marma treatments incorporating yoga, meditation and counselling.',
    duration: 'Available in 7, 14, 21 and 28 days',
    icon: 'bi-flower3'
  },
  {
    id: 14,
    name: 'AYURJEEVAN',
    subtitle: 'Ayurveda Retreat Program',
    description: 'Customised retreat program with ayurveda, yoga, spiritual sessions, counselling, teambuilding activity, farmland visits and nature exploration programs etc for complete body, mind and Soul care. This package is designed for a group of minimum of 10 in accordance with their choice and area of interest.',
    duration: 'Customized program',
    icon: 'bi-tree'
  },
  {
    id: 15,
    name: 'AYUSHA (Version-1)',
    subtitle: 'Perfect Solution to Overcome Physical and Mental Stress',
    description: 'Our Ayushya yoga retreat offers a carefully crafted 15 days program that integrates the timeless tradition of Yoga, Ayurveda and Marma Chikitsa to rejuvenate your vitality and foster inner peace. It also has a dynamic structure that daily evaluates your changes and customizes the program according to that particular group health issues, nature of changes happened to their body and mind in each step of the program based on the results of daily evaluation. This package is designed for a group of minimum of 20-30 in their common premise',
    duration: '15 days program',
    icon: 'bi-stars'
  },
  {
    id: 16,
    name: 'AYUSHA (Version-2)',
    subtitle: 'Restore Balance. Renew Energy. Reconnect Within',
    description: 'AYUSHA offers a transformative 15day yoga and healing retreat designed to relieve stress, restore vitality, and bring harmony to your body and mind. Through the powerful integration of Yoga, Ayurveda, and Marma Chikitsa, this program supports deep rejuvenation. AYUSHA not only enhances your overall wellbeing—it also helps improve existing health conditions and prevent future diseases, making it a holistic path toward longterm wellness. Our unique approach includes daily evaluations, allowing the program to adapt to your group\'s evolving physical and mental needs for maximum effectiveness. Created for groups of 20–30 participants, AYUSHA provides a shared, nurturing environment where healing, balance, and transformation naturally unfold.',
    duration: '15 days program',
    icon: 'bi-sun'
  },
  {
    id: 17,
    name: 'Balajeevanam',
    subtitle: 'Monthly Ayurvedic Swarnaprashana Program',
    description: 'Balajeevanam is a monthly Ayurvedic oral immunity‑boosting program based on the traditional formulation Swarnaprashana. This time‑tested Ayurvedic practice is designed to support the overall physical and mental well‑being of children from infancy to adolescence. Benefits: Boosts Immunity, Improves Intelligence & Memory, Enhances Digestion, Reduces Hyperactivity, Promotes Holistic Development.',
    duration: 'Monthly program for Children 0–18 Years',
    icon: 'bi-heart-fill'
  },
  {
    id: 18,
    name: 'NAYANA',
    subtitle: 'Digital Detox and Eyecare',
    description: 'A holistic Ayurvedic treatment designed to improve eye health, relieve strain, and enhance vision, especially for individuals experiencing fatigue from prolonged use of digital devices such as mobiles, tablets, and computers. Benefits: Reduces digital eye strain, Improves vision clarity, Relieves stress and fatigue, Promotes relaxation, Helps prevent long‑term vision issues.',
    duration: 'Available in 7 and 14 days',
    icon: 'bi-eye'
  }
];

export const TREATMENT_AREAS: TreatmentArea[] = [
  { id: 1, name: 'Joint disorders', icon: 'bi-bandaid' },
  { id: 2, name: 'Muscular disorders', icon: 'bi-activity' },
  { id: 3, name: 'Rheumatism', icon: 'bi-heart-pulse' },
  { id: 4, name: 'Arthritis', icon: 'bi-shield-fill-exclamation' },
  { id: 5, name: 'Life style disorders like obesity, diabetes, insomnia, hypertension etc.', icon: 'bi-person' },
  { id: 6, name: 'Low back Ache, Disc propose etc.', icon: 'bi-arrows-expand' },
  { id: 7, name: 'Allergy and asthma', icon: 'bi-lungs' },
  { id: 8, name: 'Sports injuries, ligamental injuries etc.', icon: 'bi-shield-plus' },
  { id: 9, name: 'Skin disorders like psoriasis etc.', icon: 'bi-droplet-fill' },
  { id: 10, name: 'Gynaecological problems like infertility, PCOD, PCOS, uterine fibroids, irregular periods, uterine and ovarian cyst, dysmenorrhea etc', icon: 'bi-gender-female' },
  { id: 11, name: 'Neurological disorders like paralysis, hemiplegia, paraplegia etc', icon: 'bi-activity' },
  { id: 12, name: 'Post delivery care for Mother and Child', icon: 'bi-person-hearts' },
  { id: 13, name: 'Stress, Strain, Migraine and other Head aches', icon: 'bi-flower3' },
  { id: 14, name: 'Treatment for Post Covid side effects like Breathing difficulty, tiredness etc.', icon: 'bi-lungs-fill' }
];

export const THERAPIES: Therapy[] = [
  {
    id: 1,
    name: 'Abhyangam',
    subtitle: 'Therapeutic Full-Body Oil Massage',
    description: 'A therapeutic full-body oil massage that helps restore balance among the body\'s energies. It improves circulation, eases muscle stiffness, supports joint health, and promotes deep physical and mental relaxation.',
    image: 'assets/img/img_sq_1.jpg'
  },
  {
    id: 2,
    name: 'Pizhichil',
    subtitle: 'Rejuvenating Oil Stream Therapy',
    description: 'A deeply rejuvenating therapy where warm medicated oil is continuously poured over the body. It nourishes the nervous system, strengthens muscles, and is especially beneficial for chronic joint and neurological conditions.',
    image: 'assets/img/img_sq_1.jpg'
  },
  {
    id: 3,
    name: 'Shirodhara',
    subtitle: 'Calming Forehead Oil Stream',
    description: 'A calming treatment in which medicated oil is gently streamed over the forehead. It helps relieve stress, anxiety, insomnia, and mental fatigue while supporting emotional balance and clarity.',
    image: 'assets/img/img_sq_3.jpg'
  },
  {
    id: 4,
    name: 'Kati Vasthi',
    subtitle: 'Lower Back Oil Retention',
    description: 'A localized therapy that retains warm medicated oil over the lower back. It is effective for chronic back pain, spinal discomfort, and conditions related to nerve compression.',
    image: 'assets/img/img_sq_4.jpg'
  },
  {
    id: 5,
    name: 'Thalapothichi',
    subtitle: 'Cooling Scalp Herbal Paste',
    description: 'A cooling herbal paste is applied to the scalp to calm the nervous system. This treatment is helpful for headaches, migraines, stress-related disorders, and scalp or hair concerns.',
    image: 'assets/img/img_sq_5.jpg'
  },
  {
    id: 6,
    name: 'Netra Tarpanam',
    subtitle: 'Nourishing Eye Therapy',
    description: 'A nourishing eye therapy using medicated ghee or herbal preparations. It relieves eye strain, dryness, and supports overall eye health and vision.',
    image: 'assets/img/img_sq_6.jpg'
  },
  {
    id: 7,
    name: 'Elakizhi',
    subtitle: 'Herbal Leaf Bundle Massage',
    description: 'A revitalizing massage using warm herbal leaf bundles. It reduces inflammation, relieves muscle and joint pain, and improves mobility and circulation.',
    image: 'assets/img/img_sq_4.jpg'
  },
  {
    id: 8,
    name: 'Njavarakizhi',
    subtitle: 'Medicated Rice Bolus Therapy',
    description: 'A strengthening therapy using medicated rice boluses cooked in herbal decoctions and milk. It supports muscle nourishment, improves strength, and promotes overall rejuvenation.',
    image: 'assets/img/img_sq_8.jpg'
  },
  {
    id: 9,
    name: 'Thakradhara',
    subtitle: 'Cooling Buttermilk Stream',
    description: 'A cooling variation of Shirodhara using medicated buttermilk. It is especially beneficial for stress, skin disorders, scalp conditions, and excess body heat.',
    image: 'assets/img/img_sq_1.jpg'
  },
  {
    id: 10,
    name: 'Shiro Vasthi',
    subtitle: 'Head Oil Retention Therapy',
    description: 'A specialized treatment where medicated oil is retained on the head. It helps nourish the brain and nervous system and is beneficial for neurological imbalances and chronic headaches.',
    image: 'assets/img/img_sq_3.jpg'
  },
  {
    id: 11,
    name: 'Nasyam',
    subtitle: 'Nasal Detoxification',
    description: 'A detoxifying therapy involving medicated nasal drops. It cleanses the sinus passages, improves respiratory health, and strengthens the sense organs above the neck.',
    image: 'assets/img/img_sq_3.jpg'
  },
  {
    id: 12,
    name: 'Udvarthanam',
    subtitle: 'Herbal Powder Massage',
    description: 'A stimulating dry herbal powder massage that helps reduce excess fat, improves metabolism, enhances circulation, and leaves the skin firm and refreshed.',
    image: 'assets/img/img_sq_4.jpg'
  },
  {
    id: 13,
    name: 'Rasayana Chikitsa',
    subtitle: 'Rejuvenation Therapy',
    description: 'A rejuvenation-focused therapy designed to enhance immunity, vitality, and longevity while supporting the body\'s natural healing and anti-aging processes.',
    image: 'assets/img/img_sq_5.jpg'
  },
  {
    id: 14,
    name: 'Virechanam',
    subtitle: 'Digestive Purification',
    description: 'A purification therapy that gently cleanses the digestive system, helping eliminate toxins and restore metabolic balance.',
    image: 'assets/img/img_sq_6.jpg'
  },
  {
    id: 15,
    name: 'Vamanam',
    subtitle: 'Respiratory Detoxification',
    description: 'A detoxification procedure focused on eliminating excess Kapha from the body, supporting respiratory health and metabolic clarity.',
    image: 'assets/img/img_sq_8.jpg'
  }
];

export const SPECIALIZED_TREATMENTS: SpecializedTreatment[] = [
  {
    id: 1,
    name: 'Stress and Strain Clinic',
    subtitle: 'Wellness Clinic',
    description: 'We move beyond simple relaxation our approach is to use the Gut-Brain-Skin axis to flush out cortisol and stabilizes nervous system restoring natural vitality that depletes stress. We works on the principles of Neuro-Psychological wellness (The Mental Reset) and Reduction of Musculoskeletal strain.',
    conditions: [
      'Occupational Burn Outs',
      'Insomnia',
      'Tension Headaches',
      'Chronic fatigue syndrome',
      'Relationship issues'
    ],
    treatments: [
      'Yoga',
      'Meditation',
      'Music therapies',
      'Abyanga',
      'Shirodhara',
      'Thalam',
      'Shirolepa',
      'Nasya',
      'Medhya rasayana'
    ],
    icon: 'bi-flower3'
  },
  {
    id: 2,
    name: 'OrthoNeuro Rehabilitation',
    subtitle: 'Musculoskeletal & Neurological Care',
    description: 'Our ortho-Neuro Speciality focuses on complex musculoskeletal and neurological conditions by integrating Marma Chrikisa, Neurostimulative treatments, Muscle Strengthening and rejuvenate treatments. We aim to restore functions, reduce pain and improve quality of life for those with chronic or acute disabilities.',
    conditions: [
      'Cervical and Lumbar Spondylitis',
      'Sciatica (Low back pain)',
      'Disc Prolapse or Herniation',
      'Osteoarthritis',
      'Rheumatoid arthritis',
      'Osteoporosis',
      'Post Stroke recovery Hemiplegia',
      'Paraplegia',
      'Bells palsy',
      'Chronic back pain',
      'Frozen Shoulder',
      'Fibromyalgia'
    ],
    treatments: [
      'Vata Regulation',
      'Tissue regeneration',
      'Functional yoga and exercises',
      'Abyanga',
      'Different Kizhi\'s',
      'Medicational Bandaging',
      'Vasthi',
      'Shirodhara',
      'Marma Chikitsa'
    ],
    icon: 'bi-heart-pulse'
  },
  {
    id: 3,
    name: 'Sports Injury Management and Prevention',
    subtitle: 'Athletic Performance & Recovery',
    description: 'We treat Conditions like Ligamental Tears, Tennis Elbow, Ankle sprain, Muscle strains, Joint care treatments etc',
    conditions: [
      'Ligamental Tears',
      'Tennis Elbow',
      'Ankle sprain',
      'Muscle strains',
      'Joint care treatments'
    ],
    treatments: [
      'Marma Chikitsa',
      'Lepa - Application of herbal pastes',
      'Bandana - Medicated Bandaging therapies',
      'Janu Vasti',
      'Katee Vasti',
      'Pizhichil'
    ],
    icon: 'bi-shield-plus'
  },
  {
    id: 4,
    name: 'Gynecology',
    subtitle: 'Women\'s Health Speciality',
    description: 'Gynaecological problems treated with traditional Ayurvedic approaches combining internal medications and specialized therapies.',
    conditions: [
      'Infertility',
      'PCOD',
      'PCOS',
      'Uterine fibroids',
      'Irregular periods',
      'Uterine and ovarian cyst',
      'Dysmenorrhea'
    ],
    treatments: [
      'Internal Ayurvedic medications',
      'Specialized therapies',
      'Dietary modifications',
      'Lifestyle counseling'
    ],
    icon: 'bi-gender-female'
  },
  {
    id: 5,
    name: 'Dermatology and Trichology',
    subtitle: 'Skin & Hair Health',
    description: 'Skin and hair viewed in the mirrors of your internal health. We combine Classical Ayurvedic Shodhana (Detox), Shamana (Pacification therapy) and Rasayana (Rejuvenation therapies).',
    conditions: [
      'Acne',
      'Atopic Dermatitis',
      'Psoriasis',
      'Eczema',
      'Hyperpigmetation',
      'Skin issues related to diabetes',
      'Hormonal issues',
      'Skin Dryness',
      'Telogen Effluvium (Hair Thinning)',
      'Premature Graying',
      'Seborrheic Dermatitis',
      'Alopecia'
    ],
    treatments: [
      'Abyanga',
      'Undwarthana',
      'Takradhara',
      'Mukhalepa',
      'Shrolepa',
      'Nasya'
    ],
    icon: 'bi-droplet-fill'
  },
  {
    id: 6,
    name: 'Post Natal Care',
    subtitle: 'Mother & Newborn Wellness',
    description: 'Specialized package of post delivery care for Mother and Child with ayurvedic knowledge and time-tested tradition post-delivery care knowledge of post delivery women treatments like oil massage, medicated bathing (Vedhu Kuli), spine care program, abdominal binding, hair and skin care program etc with time tested traditional formulations and medications. Also offer post deliver care for New-born including baby massage with application of herbal paste and special oil for their proper growth, body shape, immunity and hair and skin care',
    conditions: [
      'Post delivery recovery',
      'Newborn care',
      'Lactation support',
      'Postpartum wellness'
    ],
    treatments: [
      'Oil massage',
      'Medicated bathing (Vedhu Kuli)',
      'Spine care program',
      'Abdominal binding',
      'Hair and skin care',
      'Baby massage',
      'Herbal paste application'
    ],
    icon: 'bi-person-hearts'
  },
  {
    id: 7,
    name: 'Allergy Care',
    subtitle: 'Immune System Retraining',
    description: 'Modern allergic treatments only suppress symptoms. Our approach seeks to re-train immune system to recognize triggers without overacting. We combine barrier strengthening wisdom of Ayurveda with modern environmental science.',
    conditions: [
      'Allergic Rhinititis',
      'Allergic Sinusitis',
      'Allergic Cough',
      'Different Skin allergic Conditions'
    ],
    treatments: [
      'Immune modulation therapies',
      'Nasya',
      'Internal medications',
      'Dietary modifications',
      'Lifestyle changes'
    ],
    icon: 'bi-lungs'
  },
  {
    id: 8,
    name: 'Balaraksha',
    subtitle: 'Ayurvedic Immune Boosting For Children',
    description: 'Specialized care for children from 0-18 years focusing on holistic growth and development, immunity building, natural healing, improved digestion, and optimal nutrition through traditional Ayurvedic practices.',
    conditions: [
      'Immunity building',
      'Growth and development',
      'Digestive health',
      'General wellness'
    ],
    treatments: [
      'Swarnaprashana',
      'Age-appropriate therapies',
      'Nutritional guidance',
      'Preventive care'
    ],
    icon: 'bi-stars'
  }
];
