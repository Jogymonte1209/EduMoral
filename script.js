const verses = [
  { text: 'In the beginning God created the heavens and the earth.', reference: 'Genesis 1:1' },
  { text: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.', reference: 'Genesis 1:27' },
  { text: 'Therefore a man shall leave his father and mother and be joined to his wife, and they shall become one flesh.', reference: 'Genesis 2:24' },
  { text: 'And I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel.', reference: 'Genesis 3:15' },
  { text: 'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.', reference: 'Genesis 12:2' },
  { text: 'Abram believed the Lord, and he credited it to him as righteousness.', reference: 'Genesis 15:6' },
  { text: 'I am with you and will watch over you wherever you go, and I will bring you back to this land.', reference: 'Genesis 28:15' },
  { text: 'The Lord will fight for you; you need only to be still.', reference: 'Exodus 14:14' },
  { text: 'Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.', reference: 'Exodus 20:12' },
  { text: 'My Presence will go with you, and I will give you rest.', reference: 'Exodus 33:14' },
  { text: 'Love your neighbor as yourself.', reference: 'Leviticus 19:18' },
  { text: 'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.', reference: 'Numbers 6:24-26' },
  { text: 'Love the Lord your God with all your heart and with all your soul and with all your strength.', reference: 'Deuteronomy 6:5' },
  { text: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', reference: 'Joshua 1:9' },
  { text: 'The Lord is with you, mighty warrior.', reference: 'Judges 6:12' },
  { text: 'Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.', reference: 'Ruth 1:16' },
  { text: 'The Lord does not look at the things people look at. People look at the outward appearance, but the Lord looks at the heart.', reference: '1 Samuel 16:7' },
  { text: 'As for God, his way is perfect: The Lord’s word is flawless; he shields all who take refuge in him.', reference: '2 Samuel 22:31' },
  { text: 'But you, Lord, are a shield around me, my glory, the One who lifts my head high.', reference: 'Psalm 3:3' },
  { text: 'When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place.', reference: 'Psalm 8:3-4' },
  { text: 'I keep my eyes on the Lord. With him at my right hand, I will not be shaken.', reference: 'Psalm 16:8' },
  { text: 'The Lord is my shepherd; I shall not want.', reference: 'Psalm 23:1' },
  { text: 'The Lord is my light and my salvation—whom shall I fear?', reference: 'Psalm 27:1' },
  { text: 'Taste and see that the Lord is good; blessed is the one who takes refuge in him.', reference: 'Psalm 34:8' },
  { text: 'God is our refuge and strength, an ever-present help in trouble.', reference: 'Psalm 46:1' },
  { text: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.', reference: 'Psalm 51:10' },
  { text: 'When I am afraid, I put my trust in you.', reference: 'Psalm 56:3' },
  { text: 'Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.', reference: 'Psalm 91:1' },
  { text: 'Come, let us bow down in worship, let us kneel before the Lord our Maker.', reference: 'Psalm 95:6' },
  { text: 'As a father has compassion on his children, so the Lord has compassion on those who fear him.', reference: 'Psalm 103:13' },
  { text: 'Your word is a lamp for my feet, a light on my path.', reference: 'Psalm 119:105' },
  { text: 'Trust in the Lord with all your heart and lean not on your own understanding.', reference: 'Proverbs 3:5' },
  { text: 'In all your ways submit to him, and he will make your paths straight.', reference: 'Proverbs 3:6' },
  { text: 'Above all else, guard your heart, for everything you do flows from it.', reference: 'Proverbs 4:23' },
  { text: 'Hatred stirs up conflict, but love covers over all wrongs.', reference: 'Proverbs 10:12' },
  { text: 'A generous person will prosper; whoever refreshes others will be refreshed.', reference: 'Proverbs 11:25' },
  { text: 'A gentle answer turns away wrath, but a harsh word stirs up anger.', reference: 'Proverbs 15:1' },
  { text: 'Commit to the Lord whatever you do, and he will establish your plans.', reference: 'Proverbs 16:3' },
  { text: 'The name of the Lord is a fortified tower; the righteous run to it and are safe.', reference: 'Proverbs 18:10' },
  { text: 'Many are the plans in a person’s heart, but it is the Lord’s purpose that prevails.', reference: 'Proverbs 19:21' },
  { text: 'There is a time for everything, and a season for every activity under the heavens.', reference: 'Ecclesiastes 3:1' },
  { text: 'Now all has been heard; here is the conclusion of the matter: Fear God and keep his commandments, for this is the duty of all mankind.', reference: 'Ecclesiastes 12:13' },
  { text: 'Set me as a seal over your heart, as a seal on your arm; for love is as strong as death.', reference: 'Song of Solomon 8:6' },
  { text: 'For to us a child is born, to us a son is given, and the government will be on his shoulders.', reference: 'Isaiah 9:6' },
  { text: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.', reference: 'Isaiah 26:3' },
  { text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles.', reference: 'Isaiah 40:31' },
  { text: 'Do not fear, for I am with you; do not be dismayed, for I am your God.', reference: 'Isaiah 41:10' },
  { text: 'See, I have engraved you on the palms of my hands; your walls are ever before me.', reference: 'Isaiah 49:16' },
  { text: 'For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord.', reference: 'Isaiah 55:8-9' },
  { text: 'Blessed is the one who trusts in the Lord, whose confidence is in him.', reference: 'Jeremiah 17:7' },
  { text: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', reference: 'Jeremiah 29:11' },
  { text: 'The steadfast love of the Lord never ceases; his mercies never come to an end. They are new every morning; great is your faithfulness.', reference: 'Lamentations 3:22-23' },
  { text: 'I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.', reference: 'Ezekiel 36:26' },
  { text: 'If we are thrown into the blazing furnace, the God we serve is able to deliver us.', reference: 'Daniel 3:17-18' },
  { text: 'Let us know, let us press on to know the Lord.', reference: 'Hosea 6:3' },
  { text: 'And afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy.', reference: 'Joel 2:28-29' },
  { text: 'But let justice roll on like a river, righteousness like a never-failing stream!', reference: 'Amos 5:24' },
  { text: 'Those who cling to worthless idols turn away from God’s love for them.', reference: 'Jonah 2:8' },
  { text: 'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.', reference: 'Micah 6:8' },
  { text: 'The Sovereign Lord is my strength; he makes my feet like the feet of a deer, he enables me to tread on the heights.', reference: 'Habakkuk 3:19' },
  { text: 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.', reference: 'Zephaniah 3:17' },
  { text: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.', reference: 'Matthew 5:3' },
  { text: 'You are the light of the world. A town built on a hill cannot be hidden.', reference: 'Matthew 5:14' },
  { text: 'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.', reference: 'Matthew 5:16' },
  { text: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.', reference: 'Matthew 6:33' },
  { text: 'Ask, and it will be given to you; seek, and you will find; knock, and the door will be opened to you.', reference: 'Matthew 7:7' },
  { text: 'Come to me, all you who are weary and burdened, and I will give you rest.', reference: 'Matthew 11:28' },
  { text: 'With man this is impossible, but with God all things are possible.', reference: 'Matthew 19:26' },
  { text: 'Love the Lord your God with all your heart and with all your soul and with all your mind.', reference: 'Matthew 22:37' },
  { text: 'Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these.', reference: 'Mark 10:14' },
  { text: 'For no word from God will ever fail.', reference: 'Luke 1:37' },
  { text: 'Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.', reference: 'Luke 6:38' },
  { text: 'Then he said to them all: “Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me.”', reference: 'Luke 9:23' },
  { text: 'Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions.', reference: 'Luke 12:15' },
  { text: 'In the beginning was the Word, and the Word was with God, and the Word was God.', reference: 'John 1:1' },
  { text: 'The Word became flesh and made his dwelling among us.', reference: 'John 1:14' },
  { text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', reference: 'John 3:16' },
  { text: 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.', reference: 'John 8:12' },
  { text: 'The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.', reference: 'John 10:10' },
  { text: 'Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.”', reference: 'John 14:6' },
  { text: 'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit.', reference: 'John 15:5' },
  { text: 'In this world you will have trouble. But take heart! I have overcome the world.', reference: 'John 16:33' },
  { text: 'But you will receive power when the Holy Spirit comes on you; and you will be my witnesses.', reference: 'Acts 1:8' },
  { text: 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins.', reference: 'Acts 2:38' },
  { text: 'In him we live and move and have our being.', reference: 'Acts 17:28' },
  { text: 'For all have sinned and fall short of the glory of God.', reference: 'Romans 3:23' },
  { text: 'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.', reference: 'Romans 5:8' },
  { text: 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.', reference: 'Romans 8:28' },
  { text: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind.', reference: 'Romans 12:2' },
  { text: 'May the God of hope fill you with all joy and peace as you trust in him.', reference: 'Romans 15:13' },
  { text: 'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?', reference: '1 Corinthians 6:19' },
  { text: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.', reference: '1 Corinthians 13:4-7' },
  { text: 'Let all that you do be done in love.', reference: '1 Corinthians 16:14' },
  { text: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!', reference: '2 Corinthians 5:17' },
  { text: 'I have been crucified with Christ and I no longer live, but Christ lives in me.', reference: 'Galatians 2:20' },
  { text: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.', reference: 'Galatians 5:22-23' },
  { text: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.', reference: 'Ephesians 2:8-9' },
  { text: 'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.', reference: 'Ephesians 3:20' },
  { text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', reference: 'Philippians 4:6-7' },
  { text: 'I can do all this through him who gives me strength.', reference: 'Philippians 4:13' },
  { text: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.', reference: 'Colossians 3:23' },
  { text: 'Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.', reference: '1 Thessalonians 5:16-18' },
  { text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.', reference: '2 Timothy 1:7' },
  { text: 'Now faith is confidence in what we hope for and assurance about what we do not see.', reference: 'Hebrews 11:1' },
  { text: 'Let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith.', reference: 'Hebrews 12:1-2' },
  { text: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.', reference: 'James 1:5' },
  { text: 'Every good and perfect gift is from above, coming down from the Father of the heavenly lights.', reference: 'James 1:17' },
  { text: 'Submit yourselves, then, to God. Resist the devil, and he will flee from you.', reference: 'James 4:7' },
  { text: 'Cast all your anxiety on him because he cares for you.', reference: '1 Peter 5:7' },
  { text: 'We love because he first loved us.', reference: '1 John 4:19' },
  { text: 'This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.', reference: '1 John 5:14' },
  { text: 'The revelation from Jesus Christ, which God gave him to show his servants what must soon take place.', reference: 'Revelation 1:1' },
  { text: 'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.', reference: 'Revelation 21:4' },
  { text: 'He who testifies to these things says, “Yes, I am coming soon.” Amen. Come, Lord Jesus.', reference: 'Revelation 22:20' }
];

const quotes = [
  { text: '“Faith is taking the first step even when you do not see the whole staircase.”', author: 'Martin Luther King Jr.' },
  { text: '“With God, all things are possible.”', author: 'Matthew 19:26' },
  { text: '“God is our refuge and strength, an ever-present help in trouble.”', author: 'Psalm 46:1' },
  { text: '“The best way to find yourself is to lose yourself in the service of others.”', author: 'Mahatma Gandhi' },
  { text: '“Let your light shine before others.”', author: 'Matthew 5:16' }
];

const verseSummaryIdeas = [
  'This verse opens the Bible by showing that God is the Creator and source of all life.',
  'This passage teaches that people are made in God’s image and are deeply valued by Him.',
  'This verse highlights the sacred bond of marriage and the unity God intends for families.',
  'This promise shows that God’s plan includes redemption and victory over sin and suffering.',
  'God’s call to Abram reveals His promise to bless, multiply, and use His people for good.',
  'This verse shows that faith is the basis of a right relationship with God.',
  'God promises His presence, protection, and guidance to those who trust Him.',
  'This verse teaches us to stop striving and let God fight for us in His perfect timing.',
  'God calls His people to honor their parents and live in a way that reflects obedience and blessing.',
  'This verse reminds us that God’s presence brings peace, comfort, and rest.',
  'This command calls believers to love others with the same care and compassion they show themselves.',
  'This blessing teaches that God’s favor brings protection, grace, and peace for His people.',
  'This verse emphasizes that love for God is the heart of faithful living.',
  'God commands His people to be courageous because His presence is always with them.',
  'This verse reminds us that God sees strength and purpose even when a person feels weak.',
  'This passage shows the depth of loyalty, love, and commitment that God desires from His people.',
  'This verse teaches that God sees the heart, not outward appearances.',
  'This verse reveals that God’s way is flawless and trustworthy when we put our confidence in Him.',
  'David praises God as a shield and source of strength in a world full of trouble.',
  'This verse helps us marvel at God’s creation and recognize His greatness in the heavens.',
  'This passage encourages believers to keep their focus on God, who steadies and strengthens them.',
  'This verse presents God as a caring shepherd who provides everything His people need.',
  'This passage reminds us that God is our light, salvation, and source of courage in fear.',
  'This verse invites us to experience the goodness of God and find safety in His care.',
  'This prayer shows the importance of asking God to cleanse the heart and renew our spirit.',
  'This verse teaches that fear can be met with trust, because God is faithful and near.',
  'This passage describes God as our shelter and source of peace in every season of life.',
  'This verse calls us to worship God with humility, reverence, and grateful hearts.',
  'This passage reflects God’s compassion and patient mercy toward those who honor Him.',
  'This verse teaches that God’s Word gives direction and clarity in a dark and confusing world.',
  'This verse teaches us to put total trust in God instead of relying on our own limited understanding.',
  'This passage reminds us that obedience to God brings clarity and peace in every path we take.',
  'This verse shows that a guarded heart protects us from sin, bitterness, and harmful choices.',
  'This proverb teaches that love is stronger than conflict and brings healing to relationships.',
  'This verse shows that generosity blesses both the giver and the one who receives.',
  'This verse teaches that gentle words can calm anger and restore peace.',
  'This passage reminds us to surrender our plans to God and trust His direction.',
  'This verse teaches that God is a safe place of protection and refuge for the righteous.',
  'This proverb reminds us that God’s will is greater than human plans and desires.',
  'This verse teaches that life unfolds in God’s perfect timing and seasons.',
  'This passage calls people to worship God and live in obedience to His commands.',
  'This verse captures the strength of love and the lasting faithfulness of God’s covenant.',
  'This passage points to the hope and peace that come from trusting the Lord as King and Savior.',
  'This verse reminds us that Christ is the promised Savior who brings hope to all nations.',
  'This verse teaches that those who trust God can experience peace that steadies the mind.',
  'This promise shows that God renews strength and gives lasting hope to those who wait on Him.',
  'This verse reassures believers that God is present with them and will not leave them alone.',
  'This promise shows that God deeply knows His people and keeps them in His care.',
  'This verse teaches that God’s ways are higher than ours and that His wisdom is greater than ours.',
  'This verse reminds us that trusting God brings blessing, stability, and spiritual strength.',
  'This passage promises hope and prosperity for those who place their confidence in God.',
  'This verse teaches that God’s mercy is fresh every morning and that His faithfulness never fails.',
  'This verse shows that God can transform a hardened heart and make it tender and alive again.',
  'This passage shows courage in the face of pressure, because God is able to rescue His people.',
  'This verse teaches that God desires a sincere heart that seeks Him with persistence.',
  'This promise speaks of God’s Holy Spirit being poured out and His people being empowered for His purpose.',
  'This verse teaches that justice and righteousness are central to God’s heart and His kingdom.',
  'This verse warns against empty religion and calls people to a life shaped by love and obedience.',
  'This passage teaches that God’s people must live humbly, lovingly, and righteously before Him.',
  'This verse reminds us that God strengthens His people and helps them stand firm in difficult places.',
  'This verse shows that God rejoices over His people with tenderness and love.',
  'This passage teaches that true blessing belongs to those who depend on God and live humbly before Him.',
  'This verse reveals that the light of Christ should shine through believers’ lives and influence others.',
  'This passage calls believers to let their good works point others to God’s glory.',
  'This verse teaches that God’s kingdom and righteousness should come before all other concerns.',
  'This verse encourages believers to pray, seek, and persist in faith, trusting that God answers.',
  'This promise reminds us that God welcomes weary hearts and offers them rest and peace.',
  'This verse shows that God’s power can do what seems impossible for human beings.',
  'This command calls believers to love God with all their heart, soul, and mind.',
  'This verse reveals that the kingdom of God belongs to those who come with humility and childlike trust.',
  'This verse reminds us that God values the innocence and faith of children and welcomes them.',
  'This verse reveals that God’s word will never fail, even when circumstances seem uncertain.',
  'This passage teaches that generosity brings blessing and that God is generous to those who give.',
  'This verse calls believers to surrender their desires and follow Christ with obedience and faith.',
  'This warning teaches that earthly possessions are not the measure of a meaningful life.',
  'This verse shows that Jesus is the eternal Word and that God’s message is full of life and truth.',
  'This passage reveals the wonder of the incarnation, when Christ took human form to dwell among us.',
  'This verse reveals the heart of the gospel: God loves the world and offers salvation through Christ.',
  'This teaching shows that Jesus brings spiritual light and leads His followers away from darkness.',
  'This verse reveals the contrast between destruction and abundant life that Jesus offers.',
  'This verse points to Jesus as the only way to the Father and the source of truth and life.',
  'This passage teaches that abiding in Christ brings fruitfulness, purpose, and spiritual strength.',
  'This verse reminds us that trouble is real, but Christ has already overcome the world.',
  'This verse teaches that believers receive power through the Holy Spirit to witness and serve.',
  'This verse calls people to repentance and baptism as the beginning of a transformed life.',
  'This passage reminds us that every part of life is sustained by God’s existence and presence.',
  'This verse teaches that all people are sinful and in need of God’s grace.',
  'This passage reveals that God’s love is active even while we are still sinners.',
  'This verse teaches that God works all things together for the good of those who love Him.',
  'This verse challenges believers to resist worldly patterns and be renewed in mind and heart.',
  'This passage teaches that God fills His people with hope, joy, and peace by His Spirit.',
  'This verse reminds believers that their bodies are sacred and belong to God’s Spirit.',
  'This passage defines love as patient, kind, truthful, and enduring, not self-seeking or prideful.',
  'This verse teaches that love should guide every word, action, and relationship.',
  'This verse reminds us that new life in Christ means leaving the old behind and embracing renewal.',
  'This passage teaches that Christ’s life in us changes who we are and shapes our identity.',
  'This verse shows that the fruit of the Spirit is the visible evidence of a life transformed by God.',
  'This verse teaches that salvation is by God’s grace through faith, not human effort.',
  'This passage reminds us that God can do far more than we can imagine through His power.',
  'This verse teaches that prayer, thanksgiving, and trust are the path to peace in anxious moments.',
  'This verse shows that Christ gives believers the strength to face every challenge with confidence.',
  'This passage teaches that every task should be done as an act of worship to the Lord.',
  'This verse encourages believers to live with gratitude, prayer, and worship in every circumstance.',
  'This verse teaches that God’s Spirit gives us power, love, and discipline for life in Christ.',
  'This passage defines faith as trust and confidence in God’s promises even before we see them.',
  'This verse calls believers to run their race with perseverance, keeping their eyes fixed on Jesus.',
  'This verse teaches that God generously gives wisdom to those who ask Him faithfully.',
  'This passage reminds us that every good gift comes from God, the source of all blessing.',
  'This verse teaches that surrender to God leads to victory over temptation and spiritual struggle.',
  'This passage invites believers to release every worry to God, knowing He cares deeply.',
  'This verse reminds us that God’s love is the reason we are able to love others.',
  'This passage teaches that God hears our prayers when we ask according to His will.',
  'This verse introduces the revelation of Christ and the hope of His coming kingdom.',
  'This passage promises a future without sorrow, pain, or death, where God makes all things new.',
  'This final verse shows the longing of Christ’s return and the hope believers carry as they await Him.'
];

const verseSummaries = Object.fromEntries(
  verses.map((verse, index) => [verse.reference, verseSummaryIdeas[index]])
);

const quizData = [
  {
    question: 'What is the main message of Proverbs 3:5?',
    options: ['Trust in the Lord', 'Ignore wisdom', 'Follow only your feelings', 'Avoid prayer'],
    answer: 'Trust in the Lord'
  },
  {
    question: 'Which verse teaches us to do everything in love?',
    options: ['Romans 8:28', '1 Corinthians 16:14', 'Psalm 91:1', 'Genesis 1:1'],
    answer: '1 Corinthians 16:14'
  },
  {
    question: 'What does Joshua 1:9 encourage us to do?',
    options: ['Be fearful', 'Hide from God', 'Be strong and courageous', 'Stop praying'],
    answer: 'Be strong and courageous'
  }
];

let currentVerse = 0;
let currentQuestionIndex = 0;
let score = 0;

const verseText = document.getElementById('verse-text');
const verseReference = document.getElementById('verse-reference');
const verseSummary = document.getElementById('verse-summary');
const newVerseBtn = document.getElementById('new-verse');
const verseSelect = document.getElementById('verse-select');
const summaryText = document.getElementById('summary-text');

function populateVerseOptions() {
  verseSelect.innerHTML = verses
    .map((verse, index) => `<option value="${index}">${verse.reference}</option>`)
    .join('');
}

function renderSummary() {
  const verse = verses[currentVerse];
  const summary = verseSummaries[verse.reference] || 'This verse teaches us to live with faith, wisdom, and obedience as we grow closer to God.';
  summaryText.textContent = summary;
  verseSummary.textContent = summary;
}

function renderVerse() {
  const verse = verses[currentVerse];
  verseText.textContent = `“${verse.text}”`;
  verseReference.textContent = verse.reference;
  verseSelect.value = String(currentVerse);
  renderSummary();
}

newVerseBtn.addEventListener('click', () => {
  currentVerse = (currentVerse + 1) % verses.length;
  renderVerse();
});

verseSelect.addEventListener('change', (event) => {
  currentVerse = Number(event.target.value);
  renderVerse();
});

populateVerseOptions();
renderVerse();

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
let quoteIndex = 0;

function renderQuote() {
  const quote = quotes[quoteIndex];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `— ${quote.author}`;
}

setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  renderQuote();
}, 5000);

renderQuote();

const questionEl = document.getElementById('quiz-question');
const optionsEl = document.getElementById('quiz-options');
const feedbackEl = document.getElementById('quiz-feedback');
const nextBtn = document.getElementById('next-question');

function renderQuestion() {
  const current = quizData[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  nextBtn.classList.add('hidden');

  current.options.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(option, button));
    optionsEl.appendChild(button);
  });
}

function handleAnswer(selectedOption, selectedButton) {
  const current = quizData[currentQuestionIndex];
  const buttons = Array.from(optionsEl.querySelectorAll('.quiz-option'));

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === current.answer) {
      button.classList.add('correct');
    }
    if (button.textContent === selectedOption && selectedOption !== current.answer) {
      button.classList.add('wrong');
    }
  });

  if (selectedOption === current.answer) {
    score += 1;
    feedbackEl.textContent = 'Correct! Great job!';
    feedbackEl.style.color = '#1e9f6e';
  } else {
    feedbackEl.textContent = `Not quite. The correct answer is: ${current.answer}`;
    feedbackEl.style.color = '#d64545';
  }

  nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', () => {
  currentQuestionIndex += 1;

  if (currentQuestionIndex < quizData.length) {
    renderQuestion();
  } else {
    questionEl.textContent = `Quiz complete! Your score is ${score} / ${quizData.length}`;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = 'You did well. Keep learning and growing in faith!';
    feedbackEl.style.color = '#2c4fbf';
    nextBtn.classList.add('hidden');
  }
});

renderQuestion();

const matchCheck = document.getElementById('match-check');
const matchSelects = Array.from(document.querySelectorAll('.match-select'));
const matchMessage = document.getElementById('match-message');

function checkMatches() {
  let allCorrect = true;
  const resultLines = [];

  matchSelects.forEach((select) => {
    const expected = select.dataset.answer;
    const value = select.value;
    const label = select.id.replace('match-', '').replace(/-/g, ' ');

    select.classList.remove('correct', 'wrong');

    if (value === expected) {
      select.classList.add('correct');
      resultLines.push(`<div style="color: #1e9f6e; font-weight: 700;">${label}: Correct</div>`);
    } else {
      allCorrect = false;
      select.classList.add('wrong');
      resultLines.push(`<div style="color: #d64545; font-weight: 700;">${label}: Wrong</div>`);
    }
  });

  if (allCorrect) {
    matchCheck.disabled = true;
    matchCheck.textContent = 'Matched!';
    matchMessage.innerHTML = '<div style="color: #1e9f6e; font-weight: 700;">Excellent! You matched all the Bible references correctly.</div>';
  } else {
    matchCheck.disabled = false;
    matchCheck.textContent = 'Check Matches';
    matchMessage.innerHTML = resultLines.join('');
  }
}

if (matchCheck) {
  matchCheck.addEventListener('click', checkMatches);
}
