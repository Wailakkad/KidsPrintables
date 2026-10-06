export interface ActivityItem {
  number: string;
  title: string;
  description: string;
}

export interface ActivitySection {
  id: string;
  title: string;
  summary: string;
  skillFocus: string;
  items: ActivityItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  datePublished: string;
  dateModified: string;
  author: string;
  category: string;
  ageRange: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
  introParagraph: string;
  sections: ActivitySection[];
  faqs: FAQItem[];
}

export const PAYHIP_PRODUCT_URL = 'https://payhip.com/b/iL3sU';
export const FREE_SAMPLE_PDF_URL = '/Free%20%20Fall%20Printable%20Sample.pdf';

export const FALL_ACTIVITY_PACK = {
  title: 'Fall Preschool Activity Pack (Ages 3–5)',
  subtitle: '58 Print-and-Go Pages of Seasonal Learning, Fine Motor & Early Math',
  price: '$7.00',
  pagesCount: 58,
  ageRange: 'Ages 3–5 (Preschool, Pre-K & Transitional Kindergarten)',
  format: 'Instant PDF Digital Download (US Letter & A4 compatible)',
  checkoutUrl: PAYHIP_PRODUCT_URL,
  coverImage:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791293606/Featured_Printable_Bundle_section_image.jpg',
  sampleImage: '/src/assets/images/printable_sample_preview_1791289502145.jpg',
  heroImage:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791293606/fall_hero_image.jpg',
  highlights: [
    '58 ready-to-use pages — zero prep required',
    'Designed specifically for ages 3–5 developmental milestones',
    'Print-and-go blackline & full-color options included',
    'Covers fine motor, counting, alphabet, patterns, cutting & games',
    'Licensed for home, homeschool & single-classroom use',
  ],
  skillsIncluded: [
    'Coloring & Pencil Grip',
    'Line Tracing & Pre-Writing',
    'Counting & Ten-Frames (1–10)',
    'Visual Shadow Matching',
    'AB / ABB / ABC Patterns',
    'Uppercase & Lowercase Letters',
    'Scissor Cutting Strips',
    'Printable Fall Bingo & Games',
  ],
};

export const POPULAR_CATEGORIES = [
  {
    id: 'fall-printables',
    name: 'Fall Printables',
    count: '58 pages in pack',
    description: 'Pumpkins, woodland animals, acorns, and cozy autumn themes ready to print.',
    filterTag: 'Fall Printables',
    sectionAnchor: 'coloring',
  },
  {
    id: 'preschool-worksheets',
    name: 'Preschool Worksheets',
    count: 'Ages 3–5',
    description: 'Structured, developmentally gentle pages for morning baskets and quiet time.',
    filterTag: 'Preschool Worksheets',
    sectionAnchor: 'matching-visual-skills',
  },
  {
    id: 'fine-motor',
    name: 'Fine Motor',
    count: '12 activities',
    description: 'Line tracing, Q-tip dot painting, scissor strips, and clothespin clip cards.',
    filterTag: 'Fine Motor',
    sectionAnchor: 'tracing-fine-motor',
  },
  {
    id: 'counting',
    name: 'Counting',
    count: 'Numbers 1–10',
    description: 'Ten-frame pumpkin mats, count-and-clip cards, and harvest roll-and-color.',
    filterTag: 'Counting',
    sectionAnchor: 'counting-numbers',
  },
  {
    id: 'letters',
    name: 'Letters',
    count: 'A–Z phonics',
    description: 'Letter hunt dauber pages, uppercase/lowercase puzzles, and beginning sounds.',
    filterTag: 'Alphabet',
    sectionAnchor: 'alphabet-letters',
  },
  {
    id: 'games',
    name: 'Games',
    count: 'Small group & family',
    description: 'Picture-only Fall Bingo, roll-and-cover forest boards, and pattern puzzles.',
    filterTag: 'Games',
    sectionAnchor: 'games',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'fall-activities-for-preschoolers',
    title: '25 Easy Fall Activities for Preschoolers (Ages 3–5) + Free Printables',
    excerpt:
      'Looking for low-prep fall activities for preschoolers? Explore 25 hands-on autumn ideas across coloring, tracing, counting, cutting, and games—plus grab your free printable sample.',
    metaDescription:
      'Discover 25 low-prep fall activities for preschoolers (ages 3–5) with free fall preschool printables covering fine motor tracing, counting, alphabet, and games.',
    datePublished: '2026-10-01',
    dateModified: '2026-10-06',
    author: 'Kids Printables | Coloring & Activities',
    category: 'Fall Printables',
    ageRange: 'Ages 3–5',
    readTime: '8 min read',
    featuredImage:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1791293663/fall_blog_cover_image.jpg',
    tags: ['Fall Printables', 'Preschool Worksheets', 'Fine Motor', 'Counting', 'Alphabet', 'Games'],
    introParagraph:
      'Welcome! If you hopped over from Pinterest looking for low-prep fall activities for preschoolers that genuinely hold a 3- to 5-year-old’s attention—without requiring an hour of craft-closet cleanup—you are in the right place. Whether you are planning a week of preschool centers, filling a morning homeschool basket, or setting up a 15-minute kitchen table activity while dinner simmers, these 25 autumn learning ideas combine hands-on play with print-and-go simplicity.',
    sections: [
      {
        id: 'coloring',
        title: 'Coloring',
        summary: 'Thick-lined seasonal art pages that build crayon control, color recognition, and autumn vocabulary.',
        skillFocus: 'Crayon grip · Color recognition · Hand endurance',
        items: [
          {
            number: '01',
            title: 'Oversized Pumpkin Patch Coloring Pages',
            description:
              'Bold, wide-bordered pumpkin illustrations give 3-year-olds clear visual boundaries so they can practice a tripod crayon grasp without frustration. Talk about pumpkin parts—stem, ribs, vine, and leaves—as they color in warm orange and sage tones.',
          },
          {
            number: '02',
            title: 'Color-by-Shape Autumn Woodland Friends',
            description:
              'Combine early geometry with seasonal coloring. Preschoolers spot circles, triangles, and squares tucked inside acorns, hedgehogs, and owls, matching each shape to a simple visual crayon key—no reading required.',
          },
          {
            number: '03',
            title: 'Warm & Cool Leaf Rubbing Printable Mats',
            description:
              'Tuck real backyard leaves underneath a printable leaf frame page and rub across the paper with the side of a peeled wax crayon. Children watch the leaf veins appear while building bilateral hand stability.',
          },
        ],
      },
      {
        id: 'tracing-fine-motor',
        title: 'Tracing & Fine Motor',
        summary: 'Pre-writing pathways and pincer-grasp workouts that prepare young hands for confident letter formation.',
        skillFocus: 'Pre-writing strokes · Pincer grasp · Wrist stability',
        items: [
          {
            number: '04',
            title: 'Falling Leaf Line Tracing Paths',
            description:
              'Before preschoolers write letters, they need smooth control across horizontal, vertical, zig-zag, and curved strokes. Guide falling autumn leaves from the oak branch down to the leaf pile using chunky markers or finger tracing.',
          },
          {
            number: '05',
            title: 'Acorn Dot-to-Dot & Q-Tip Painting',
            description:
              'Pair washable autumn tempera paint with a cotton swab (or 3/4-inch dot stickers) to fill in circle targets along oversized acorns and squirrels. Holding a Q-tip naturally encourages a neat pincer grasp.',
          },
          {
            number: '06',
            title: 'Apple Orchard Dry-Erase Spiral Mazes',
            description:
              'Wide, forgiving paths wind through an autumn apple orchard toward a harvest basket. Slip the printable into a dry-erase pocket sleeve so children can trace, wipe clean, and repeat all season long.',
          },
        ],
      },
      {
        id: 'counting-numbers',
        title: 'Counting & Numbers',
        summary: 'Tactile number sense activities covering one-to-one correspondence, ten-frames, and numeral recognition 1–10.',
        skillFocus: 'One-to-one correspondence · Subitizing · Numerals 1–10',
        items: [
          {
            number: '07',
            title: 'Ten-Frame Pumpkin Seed Counting Mats',
            description:
              'Print a pumpkin ten-frame mat and pair it with dried pumpkin seeds, felted acorns, or orange pom-poms. Children place one counter per box to visualize quantities 1 through 10 and early addition concepts.',
          },
          {
            number: '08',
            title: 'Count & Clip Woodland Number Cards',
            description:
              'Preschoolers count the pinecones, foxes, or mushrooms on each card and clip a wooden clothespin onto the matching numeral. Pinching the clothespin builds finger strength while reinforcing number accuracy.',
          },
          {
            number: '09',
            title: 'Apple Basket Number Roll & Color',
            description:
              'Roll a standard dot die, count the pips, and color the matching numbered apple in the harvest basket. Keeps 4- and 5-year-olds engaged in independent math practice for 15+ minutes.',
          },
        ],
      },
      {
        id: 'matching-visual-skills',
        title: 'Matching & Visual Skills',
        summary: 'Visual discrimination exercises that train the brain to notice subtle shape and orientation differences.',
        skillFocus: 'Visual discrimination · Spatial reasoning · Left-to-right scanning',
        items: [
          {
            number: '10',
            title: 'Autumn Shadow Matching Sheets',
            description:
              'Children draw a line connecting each full-color fall object—scarecrow, wheelbarrow, oak leaf, acorn—to its solid silhouette. Shadow matching directly supports early reading by sharpening shape discrimination.',
          },
          {
            number: '11',
            title: 'Leaf Half-to-Half Symmetry Puzzles',
            description:
              'Cut printable maple, oak, and birch leaves down their center line and invite preschoolers to reunite matching halves by inspecting serrated edges, vein lines, and autumn color gradients.',
          },
          {
            number: '12',
            title: 'Same or Different Harvest Row Scan',
            description:
              'In each horizontal row of four autumn illustrations, three are identical and one has a playful difference (such as a pumpkin missing its curly vine). Children scan left-to-right and circle the unique item.',
          },
        ],
      },
      {
        id: 'patterns',
        title: 'Patterns',
        summary: 'Sequencing strips and prediction sheets that build foundational algebraic and logical reasoning.',
        skillFocus: 'AB, ABB & ABC sequencing · Logical prediction',
        items: [
          {
            number: '13',
            title: 'AB & ABB Autumn Leaf Pattern Strips',
            description:
              'Chant the rhythm aloud together—“Pumpkin, Acorn, Pumpkin, Acorn, what comes next?”—as preschoolers place the correct cutout tile at the end of each printable pattern row.',
          },
          {
            number: '14',
            title: 'Cozy Caterpillar Sweater Color Patterns',
            description:
              'A zero-cutting pattern worksheet where children inspect the beginning stripes on an autumn caterpillar and color the remaining segments to complete AB, AABB, and ABC sequences.',
          },
          {
            number: '15',
            title: 'Nature Walk Loose-Parts Pattern Grid',
            description:
              'Bring a printable 5-square grid outside or to your science table. Children alternate real pinecones, yellow leaves, and smooth twigs inside the boxes to invent their own seasonal patterns.',
          },
        ],
      },
      {
        id: 'alphabet-letters',
        title: 'Alphabet / Letters',
        summary: 'Playful phonics and letter identification activities tailored for pre-readers ages 3–5.',
        skillFocus: 'Uppercase & lowercase match · Letter recognition · Beginning sounds',
        items: [
          {
            number: '16',
            title: 'A-is-for-Acorn Letter Find Dauber Sheets',
            description:
              'Preschoolers hunt for target uppercase and lowercase letters (like A, F, L, P, and S) hidden across a canopy of autumn leaves, stamping each match with a washable dot marker or coloring it in.',
          },
          {
            number: '17',
            title: 'Uppercase to Lowercase Pumpkin Patch Match',
            description:
              'Match two-piece pumpkin puzzles by pairing uppercase letters with their lowercase partners. Start with just the letters in your child’s first name for an instant confidence boost.',
          },
          {
            number: '18',
            title: 'Beginning Sound Harvest Baskets',
            description:
              'Say the picture name aloud—apple, acorn, leaf, lantern, pumpkin, pie—listen for the first sound, and sort each card onto its matching letter basket mat.',
          },
        ],
      },
      {
        id: 'cutting-pasting',
        title: 'Cutting & Pasting',
        summary: 'Graduated scissor practice moving from single straight snips to simple seasonal shape assembly.',
        skillFocus: 'Scissor safety · Bilateral coordination · Size seriation',
        items: [
          {
            number: '19',
            title: 'Straight-Line Hay Bale Scissor Strips',
            description:
              'Short, sturdy cutting paths with bold dashed lines help beginning cutters keep their thumb pointed up ("thumbs to the sky") as they snip along straight and gentle wave lines toward autumn icons.',
          },
          {
            number: '20',
            title: 'Build-a-Scarecrow Cut & Paste Sheet',
            description:
              'All pieces fit on a single printable page with generous rounded cutting borders. Preschoolers trim the floppy hat, smiling face, patched shirt, and boots, then glue their scarecrow onto construction paper.',
          },
          {
            number: '21',
            title: 'Sort by Size: Small, Medium & Large Pumpkins',
            description:
              'Children cut out six harvest pumpkins of graduated sizes and paste them in order from smallest to largest (or largest to smallest) along a printable wooden fence mat.',
          },
        ],
      },
      {
        id: 'games',
        title: 'Games',
        summary: 'Turn-taking, vocabulary-rich printable games for family tables, small groups, and rainy fall afternoons.',
        skillFocus: 'Turn-taking · Receptive vocabulary · Social-emotional play',
        items: [
          {
            number: '22',
            title: 'Picture-Only Fall Bingo (Up to 4 Players)',
            description:
              'Zero reading required! Call out autumn vocabulary—rake, gourd, hedgehog, sunflower, raincoat, acorn—while players cover matching illustrations with dried corn kernels, buttons, or pom-poms.',
          },
          {
            number: '23',
            title: 'Roll & Cover Autumn Forest Board Game',
            description:
              'A cooperative, frustration-free board game where preschoolers roll a die, hop along a leafy woodland trail, and name the fall objects they land on until everyone reaches the cozy cabin together.',
          },
        ],
      },
      {
        id: 'creative-activities',
        title: 'Creative Activities',
        summary: 'Open-ended drawing and sensory observation prompts that spark storytelling and self-expression.',
        skillFocus: 'Creative expression · Sensory observation · Oral language',
        items: [
          {
            number: '24',
            title: 'Design Your Own Cozy Fall Sweater Printable',
            description:
              'An open-ended sweater outline where children invent their own autumn knitwear using crayons, dot stickers, yarn scraps, or torn tissue paper squares.',
          },
          {
            number: '25',
            title: 'My Fall Senses Nature Journal Page',
            description:
              'Four inviting drawing boxes—“Something orange I saw, Something crunchy I heard, Something cozy I touched, Something sweet I smelled”—ideal for wrapping up a neighborhood nature walk.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'What age range is the Fall Preschool Activity Pack designed for?',
        answer:
          'The 58-page Fall Preschool Activity Pack is thoughtfully designed for children ages 3 to 5 (Preschool, Pre-K, and Transitional Kindergarten). Younger 3-year-olds love the thick-lined coloring pages, dot marker sheets, shadow matching, and straight-line scissor strips, while 4- and 5-year-olds thrive on the ten-frame counting mats, AB/ABC pattern sequences, letter hunts, and roll-and-cover games.',
      },
      {
        question: 'What are the best printing tips for preschool worksheets?',
        answer:
          'All pages are formatted for standard US Letter (8.5" × 11") and also print cleanly on A4 paper using "Fit to Printable Area." For coloring and cut-and-paste sheets, standard 20–24 lb home printer paper works great. For reusable centers like counting mats, clip cards, and Fall Bingo, we recommend printing on 65–80 lb cardstock or sliding sheets into dry-erase pocket sleeves.',
      },
      {
        question: 'Can I use these printables in my preschool classroom or homeschool co-op?',
        answer:
          'Yes! Every purchase includes a personal and single-classroom license. You may print unlimited copies for your own children at home or for the students in your individual preschool or kindergarten classroom. (Please do not share the digital PDF file online or distribute it across an entire school district.)',
      },
      {
        question: 'How do I receive the activity pack after checkout?',
        answer:
          'This is a 100% digital download fulfilled instantly through Payhip. Immediately after checkout, you will be able to download the high-resolution 58-page PDF directly to your computer, tablet, or phone, plus you will receive a backup download link via email.',
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
