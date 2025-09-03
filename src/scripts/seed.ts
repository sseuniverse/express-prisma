import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  try {
    await db.quotes.createMany({
      data: [
        {
          author: "Charles Dickens",
          content:
            "Subdue your appetites, my dears, and you've conquered human nature.",
          tags: [],
          authorSlug: "charles-dickens",
          length: 67,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Charles Dickens",
          content:
            "No one is useless in this world who lightens the burdens of another.",
          tags: ["Generosity"],
          authorSlug: "charles-dickens",
          length: 68,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
          tags: ["Opportunity", "Work"],
          authorSlug: "thomas-edison",
          length: 91,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "Hell, there are no rules here-- we're trying to accomplish something.",
          tags: [],
          authorSlug: "thomas-edison",
          length: 69,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "If we all did the things we are capable of doing, we would literally astound ourselves.",
          tags: ["Inspirational", "Motivational"],
          authorSlug: "thomas-edison",
          length: 87,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "Genius is one per cent inspiration, ninety-nine per cent perspiration.",
          tags: ["Work", "Genius", "Inspirational", "Motivational"],
          authorSlug: "thomas-edison",
          length: 70,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Charles Dickens",
          content:
            "Train up a fig tree in the way it should go, and when you are old sit under the shade of it.",
          tags: ["Age", "Wisdom"],
          authorSlug: "charles-dickens",
          length: 92,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Charles Dickens",
          content:
            "I do not know the American gentleman, god forgive me for putting two such words together.",
          tags: ["Humorous"],
          authorSlug: "charles-dickens",
          length: 89,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content: "To invent, you need a good imagination and a pile of junk.",
          tags: ["Imagination", "Creativity", "Science", "Technology"],
          authorSlug: "thomas-edison",
          length: 58,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "If I find 10,000 ways something won't work, I haven't failed. I am not discouraged, because every wrong attempt discarded is another step forward.",
          tags: ["Perseverance", "Success", "Inspirational", "Motivational"],
          authorSlug: "thomas-edison",
          length: 146,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content: "I never did a day's work in my life.  It was all fun.",
          tags: ["Humorous"],
          authorSlug: "thomas-edison",
          length: 53,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "Results! Why, man, I have gotten a lot of results. I know several thousand things that won't work.",
          tags: ["Success", "Failure", "Perseverance"],
          authorSlug: "thomas-edison",
          length: 98,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Charles Dickens",
          content:
            "Minds, like bodies, will often fall into a pimpled, ill-conditioned state from mere excess of comfort.",
          tags: ["Weakness"],
          authorSlug: "charles-dickens",
          length: 102,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.",
          tags: ["Health", "Wellness"],
          authorSlug: "thomas-edison",
          length: 179,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content: "We don't know a millionth of one percent about anything.",
          tags: ["Knowledge"],
          authorSlug: "thomas-edison",
          length: 56,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content: "Everything comes to him who hustles while he waits.",
          tags: ["Success", "Motivational"],
          authorSlug: "thomas-edison",
          length: 51,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Charles Dickens",
          content:
            "Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.",
          tags: ["Gratitude"],
          authorSlug: "charles-dickens",
          length: 121,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "I never did anything worth doing by accident, nor did any of my inventions come by accident",
          tags: ["Success", "Science"],
          authorSlug: "thomas-edison",
          length: 91,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Charles Dickens",
          content: "We need never be ashamed of our tears.",
          tags: ["Sadness"],
          authorSlug: "charles-dickens",
          length: 38,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content: "As a cure for worrying, work is better than whisky.",
          tags: ["Humorous"],
          authorSlug: "thomas-edison",
          length: 51,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "There is no expedient to which a man will not go to avoid the labor of thinking.",
          tags: ["Work"],
          authorSlug: "thomas-edison",
          length: 80,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Edison",
          content:
            "Faith, as well intentioned as it may be, must be built on facts, not fiction--faith in fiction is a damnable false hope.",
          tags: ["Religion"],
          authorSlug: "thomas-edison",
          length: 120,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Gravitation cannot be held responsible for people falling in love. How on earth can you explain in terms of chemistry and physics so important a biological phenomenon as first love? Put your hand on a stove for a minute and it seems like an hour. Sit with that special girl for an hour and it seems like a minute. That's relativity.",
          tags: ["Love", "Science"],
          authorSlug: "albert-einstein",
          length: 332,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Perfection of means and confusion of ends seems to characterize our age.",
          tags: ["Humorous"],
          authorSlug: "albert-einstein",
          length: 72,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
          tags: ["History", "War"],
          authorSlug: "albert-einstein",
          length: 114,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
          tags: ["Stupidity"],
          authorSlug: "albert-einstein",
          length: 98,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content: "If I had only known, I would have been a locksmith.",
          tags: ["Humorous"],
          authorSlug: "albert-einstein",
          length: 51,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "It is the supreme art of the teacher to awaken joy in creative expression and knowledge.",
          tags: ["Knowledge", "Education"],
          authorSlug: "albert-einstein",
          length: 88,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.",
          tags: ["Mathematics", "Education", "Science"],
          authorSlug: "albert-einstein",
          length: 93,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content: "It is a miracle that curiosity survives formal education.",
          tags: ["Education"],
          authorSlug: "albert-einstein",
          length: 57,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Laws alone can not secure freedom of expression; in order that every man present his views without penalty there must be spirit of tolerance in the entire population.",
          tags: ["Freedom", "Tolerance"],
          authorSlug: "albert-einstein",
          length: 166,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Few people are capable of expressing with equanimity opinions which differ from the prejudices of their social environment. Most people are even incapable of forming such opinions.",
          tags: ["Society"],
          authorSlug: "albert-einstein",
          length: 180,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content: "I never think of the future - it comes soon enough.",
          tags: ["Future"],
          authorSlug: "albert-einstein",
          length: 51,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content: "Before God we are all equally wise - and equally foolish.",
          tags: ["Religion"],
          authorSlug: "albert-einstein",
          length: 57,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Ethical axioms are found and tested not very differently from the axioms of science. Truth is what stands the test of experience.",
          tags: ["Education", "Science", "Ethics"],
          authorSlug: "albert-einstein",
          length: 129,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "If you are out to describe the truth, leave elegance to the tailor.",
          tags: ["Truth"],
          authorSlug: "albert-einstein",
          length: 67,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content: "Imagination is more important than knowledge...",
          tags: ["Imagination", "Knowledge"],
          authorSlug: "albert-einstein",
          length: 47,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.",
          tags: ["History", "Science"],
          authorSlug: "albert-einstein",
          length: 218,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "My religion consists of a humble admiration of the illimitable superior spirit who reveals himself in the slight details we are able to perceive with our frail and feeble mind.",
          tags: ["Religion"],
          authorSlug: "albert-einstein",
          length: 176,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "The ideals which have lighted my way, and time after time have given me new courage to face life cheerfully, have been Kindness, Beauty, and Truth. The trite subjects of human efforts, possessions, outward success, luxury have always seemed to me contemptible.",
          tags: ["Success"],
          authorSlug: "albert-einstein",
          length: 260,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
          tags: ["Education", "Science"],
          authorSlug: "albert-einstein",
          length: 90,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Albert Einstein",
          content:
            "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
          tags: ["Education"],
          authorSlug: "albert-einstein",
          length: 180,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content:
            "I don't look to jump over 7-foot bars; I look around for 1-foot bars that I can step over.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 90,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content:
            "If you have a harem of 40 women, you never get to know any of them very well.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 77,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content:
            "Beware lest you lose the substance by grasping at the shadow.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "aesop",
          length: 61,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content: "The smaller the mind the greater the conceit.",
          tags: [],
          authorSlug: "aesop",
          length: 45,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content:
            "Be content with your lot; one cannot be first in everything.",
          tags: ["Wisdom"],
          authorSlug: "aesop",
          length: 60,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content: "Price is what you pay. Value is what you get.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 45,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content: "Persuasion is often more effectual than force.",
          tags: ["Wisdom"],
          authorSlug: "aesop",
          length: 46,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content: "Injuries may be forgiven, but not forgotten.",
          tags: ["Wisdom"],
          authorSlug: "aesop",
          length: 44,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content: "The only time to buy these is on a day with no 'y' in it.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 57,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content:
            "Most people get interested in stocks when everyone else is. The time to get interested is when no one else is. You can't buy what is popular and do well.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 153,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content:
            "I won't close down a business of subnormal profitability merely to add a fraction of a point to our corporate returns. I also feel it inappropriate for even an exceptionally profitable company to fund an operation once it appears to have unending losses in prospect. Adam Smith would disagree with my first proposition and Karl Marx would disagree with my second; the middle ground is the only position that leaves me comfortable.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 430,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content:
            "In the business world, the rearview mirror is always clearer than the windshield.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 81,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content:
            "It's only when the tide goes out that you discover who's been swimming naked.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 77,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content: "It is easy to be brave from a safe distance.",
          tags: ["Wisdom"],
          authorSlug: "aesop",
          length: 44,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content:
            "It is with our passions, as it is with fire and water, they are good servants but bad masters.",
          tags: ["Wisdom", "Love"],
          authorSlug: "aesop",
          length: 94,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Aesop",
          content:
            "Better be wise by the misfortunes of others than by your own.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "aesop",
          length: 61,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Buffett",
          content:
            "I violated the Noah rule: Predicting rain doesn't count; building arks does.",
          tags: [],
          authorSlug: "warren-buffett",
          length: 76,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Should a person do good, let him do it again and again. Let him find pleasure therein, for blissful is the accumulation of good.",
          tags: ["Wisdom", "Character"],
          authorSlug: "the-buddha",
          length: 128,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "'As I am, so are these. As are these, so am I.' Drawing the parallel to yourself, neither kill nor get others to kill.",
          tags: ["Wisdom", "Virtue", "Honor"],
          authorSlug: "the-buddha",
          length: 118,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Purity and impurity depend on oneself; no one can purify another.",
          tags: ["Wisdom", "Self", "Self Help"],
          authorSlug: "the-buddha",
          length: 65,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Ceasing to do evil, Cultivating the good, Purifying the heart: This is the teaching of the Buddhas.",
          tags: ["Wisdom", "Virtue"],
          authorSlug: "the-buddha",
          length: 99,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "It's a good thing to be satisfied with what one has.",
          tags: ["Wisdom", "Self Help"],
          authorSlug: "the-buddha",
          length: 52,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "If a man going down into a river, swollen and swiftly flowing, is carried away by the current — how can he help others across? – The Buddha",
          tags: ["Wisdom"],
          authorSlug: "the-buddha",
          length: 139,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "You yourself must strive. The Buddhas only point the way.",
          tags: ["Wisdom", "Motivational"],
          authorSlug: "the-buddha",
          length: 57,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "As a water bead on a lotus leaf, as water on a red lily, does not adhere, so the sage does not adhere to the seen, the heard, or the sensed.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 140,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "One is not called noble who harms living beings. By not harming living beings one is called noble.",
          tags: ["Wisdom", "Virtue"],
          authorSlug: "the-buddha",
          length: 98,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.",
          tags: ["Wisdom", "Virtue", "Honor"],
          authorSlug: "the-buddha",
          length: 128,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "May all beings have happy minds.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 32,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Speak only endearing speech, speech that is welcomed. Speech, when it brings no evil to others, is a pleasant thing.",
          tags: ["Wisdom", "Virtue", "Honor"],
          authorSlug: "the-buddha",
          length: 116,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame.",
          tags: ["Wisdom", "Character"],
          authorSlug: "the-buddha",
          length: 102,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "There is no fear for one whose mind is not filled with desires.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 63,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Know from the rivers in clefts and in crevices: those in small channels flow noisily, the great flow silent. Whatever's not full makes noise. Whatever is full is quiet.",
          tags: ["Wisdom", "Character"],
          authorSlug: "the-buddha",
          length: 168,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "When watching after yourself, you watch after others. When watching after others, you watch after yourself.",
          tags: ["Wisdom"],
          authorSlug: "the-buddha",
          length: 107,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "If with a pure mind a person speaks or acts, happiness follows them like a never-departing shadow.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 98,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "They blame those who remain silent, they blame those who speak much, they blame those who speak in moderation. There is none in the world who is not blamed.",
          tags: ["Wisdom"],
          authorSlug: "the-buddha",
          length: 156,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "All experiences are preceded by mind, having mind as their master, created by mind.",
          tags: ["Wisdom", "Self"],
          authorSlug: "the-buddha",
          length: 83,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Better than a thousand useless words is one useful word, upon hearing which one attains peace.",
          tags: ["Wisdom", "Character"],
          authorSlug: "the-buddha",
          length: 94,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Those who cling to perceptions and views wander the world offending people.",
          tags: ["Wisdom"],
          authorSlug: "the-buddha",
          length: 75,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Whoever doesn't flare up at someone who's angry wins a battle hard to win.",
          tags: ["Wisdom", "Character"],
          authorSlug: "the-buddha",
          length: 74,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "The root of suffering is attachment.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 36,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Should someone do good, let them do it again and again. They should develop this habit, for the accumulation of goodness brings joy.",
          tags: ["Wisdom", "Motivational"],
          authorSlug: "the-buddha",
          length: 132,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Better it is to live one day seeing the rise and fall of things than to live a hundred years without ever seeing the rise and fall of things.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 141,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Radiate boundless love towards the entire world — above, below, and across — unhindered, without ill will, without enmity.",
          tags: ["Wisdom", "Love"],
          authorSlug: "the-buddha",
          length: 122,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "Radiate boundless love towards the entire world…",
          tags: ["Wisdom", "Love"],
          authorSlug: "the-buddha",
          length: 48,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Should a seeker not find a companion who is better or equal, let them resolutely pursue a solitary course.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 106,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Whatever has the nature of arising has the nature of ceasing.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 61,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "Meditate … do not delay, lest you later regret it.",
          tags: ["Wisdom", "Motivational"],
          authorSlug: "the-buddha",
          length: 50,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Should you find a wise critic to point out your faults, follow him as you would a guide to hidden treasure.",
          tags: ["Wisdom", "Wisdom"],
          authorSlug: "the-buddha",
          length: 107,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "I do not dispute with the world; rather it is the world that disputes with me.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 78,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Whatever is not yours: let go of it. Your letting go of it will be for your long-term happiness & benefit.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 106,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "A noble one produces an abundance of merit by having a compassionate mind towards all living beings.",
          tags: ["Wisdom", "Love"],
          authorSlug: "the-buddha",
          length: 100,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "It is in the nature of things that joy arises in a person free from remorse.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 76,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Some do not understand that we must die, But those who do realize this settle their quarrels.",
          tags: ["Wisdom", "Life"],
          authorSlug: "the-buddha",
          length: 93,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Irrigators channel waters; fletchers straighten arrows; carpenters bend wood; the wise master themselves.",
          tags: ["Wisdom", "Self Help", "Character"],
          authorSlug: "the-buddha",
          length: 105,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Just as a mother would protect her only child with her life, even so let one cultivate a boundless love towards all beings.",
          tags: ["Wisdom", "Love"],
          authorSlug: "the-buddha",
          length: 123,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "As an elephant in the battlefield withstands arrows shot from bows all around, even so shall I endure abuse.",
          tags: ["Wisdom", "Character", "Courage"],
          authorSlug: "the-buddha",
          length: 108,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "The calmed say that what is well-spoken is best; second, that one should say what is right, not unrighteous; third, what's pleasing, not displeasing; fourth, what is true, not false.",
          tags: ["Wisdom", "Truth"],
          authorSlug: "the-buddha",
          length: 182,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "Delight in heedfulness! Guard well your thoughts!",
          tags: ["Wisdom", "Virtue"],
          authorSlug: "the-buddha",
          length: 49,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "A disciplined mind brings happiness.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 36,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Ardently do today what must be done. Who knows? Tomorrow, death comes.",
          tags: ["Wisdom", "Motivational"],
          authorSlug: "the-buddha",
          length: 70,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "He who can curb his wrath as soon as it arises, as a timely antidote will check snake's venom that so quickly spreads, — such a monk gives up the here and the beyond, just as a serpent sheds its worn-out skin.",
          tags: ["Wisdom", "Self Help"],
          authorSlug: "the-buddha",
          length: 209,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "The world is afflicted by death and decay. But the wise do not grieve, having realized the nature of the world.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 111,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "One should train in deeds of merit—generosity, a balanced life, developing a loving mind—that yield long-lasting happiness.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 123,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Conquer anger with non-anger. Conquer badness with goodness. Conquer meanness with generosity. Conquer dishonesty with truth.",
          tags: ["Wisdom", "Virtue", "Love"],
          authorSlug: "the-buddha",
          length: 125,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Let none find fault with others; let none see the omissions and commissions of others. But let one see one's own acts, done and undone.",
          tags: ["Wisdom", "Honor"],
          authorSlug: "the-buddha",
          length: 135,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "'All conditioned things are impermanent' — when one sees this with wisdom, one turns away from suffering.",
          tags: ["Wisdom", "Philosophy"],
          authorSlug: "the-buddha",
          length: 105,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "A mind unruffled by the vagaries of fortune, from sorrow freed, from defilements cleansed, from fear liberated — this is the greatest blessing.",
          tags: ["Wisdom"],
          authorSlug: "the-buddha",
          length: 143,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "A wise person should be urgently moved on occasions that make for urgency.",
          tags: ["Wisdom", "Motivational"],
          authorSlug: "the-buddha",
          length: 74,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "The thing that is disliked by me is also disliked by others. Since I dislike this thing, how can I inflict it on someone else?",
          tags: ["Wisdom", "Philosophy", "Virtue", "Honor"],
          authorSlug: "the-buddha",
          length: 126,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.",
          tags: ["Wisdom", "Love"],
          authorSlug: "the-buddha",
          length: 112,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "'As I am, so are they; as they are, so am I.' Comparing others with oneself, do not kill nor cause others to kill.",
          tags: ["Wisdom", "Virtue"],
          authorSlug: "the-buddha",
          length: 114,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "We will develop and cultivate the liberation of mind by lovingkindness, make it our vehicle, make it our basis, stabilize it, exercise ourselves in it, and fully perfect it.",
          tags: ["Wisdom", "Love"],
          authorSlug: "the-buddha",
          length: 173,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "Resolutely train yourself to attain peace.",
          tags: ["Wisdom", "Self Help"],
          authorSlug: "the-buddha",
          length: 42,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "To support mother and father, to cherish partner and children, and to be engaged in peaceful occupation — this is the greatest blessing.",
          tags: ["Wisdom", "Family"],
          authorSlug: "the-buddha",
          length: 136,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content:
            "Both formerly and now, it is only suffering that I describe, and the cessation of suffering.",
          tags: ["Wisdom", "Happiness"],
          authorSlug: "the-buddha",
          length: 92,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "The Buddha",
          content: "Give, even if you only have a little.",
          tags: ["Wisdom"],
          authorSlug: "the-buddha",
          length: 37,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Sandy Koufax",
          content: "Pitching is the art of instilling fear.",
          tags: ["Sports", "Competition"],
          authorSlug: "sandy-koufax",
          length: 39,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Yogi Berra",
          content: "Half the lies they tell about me aren't true.",
          tags: ["Sports", "Competition"],
          authorSlug: "yogi-berra",
          length: 45,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Erma Bombeck",
          content:
            "If a man watches three football games in a row, he should be declared legally dead.",
          tags: ["Sports", "Humorous"],
          authorSlug: "erma-bombeck",
          length: 83,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Michael Phelps",
          content:
            "You can't put a limit on anything. The more you dream, the farther you get.",
          tags: ["Sports", "Competition"],
          authorSlug: "michael-phelps",
          length: 75,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Earl Monroe",
          content:
            "Just be patient. Let the game come to you. Don't rush. Be quick, but don't hurry.",
          tags: ["Sports", "Competition"],
          authorSlug: "earl-monroe",
          length: 81,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Bobby Unser",
          content: "Success is where preparation and opportunity meet.",
          tags: ["Sports", "Competition"],
          authorSlug: "bobby-unser",
          length: 50,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Benjamin Disraeli",
          content: "Never complain and never explain.",
          tags: ["Motivational"],
          authorSlug: "benjamin-disraeli",
          length: 33,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Mike Singletary (basketball)",
          content:
            "Do you know what my favorite part of the game is? The opportunity to play.",
          tags: ["Sports", "Competition"],
          authorSlug: "mike-singletary-basketball",
          length: 74,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Eric Liddell",
          content: "God made me fast. And when I run, I feel His pleasure.",
          tags: ["Sports", "Competition"],
          authorSlug: "eric-liddell",
          length: 54,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Don Marquis",
          content: "Ideas pull the trigger, but instinct loads the gun.",
          tags: ["Business"],
          authorSlug: "don-marquis",
          length: 51,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Jim Bouton",
          content:
            "You spend a good piece of your life gripping a baseball and in the end it turns out that it was the other way around all the time.",
          tags: ["Sports", "Competition"],
          authorSlug: "jim-bouton",
          length: 130,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Babe Ruth",
          content:
            "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.",
          tags: ["Sports", "Competition"],
          authorSlug: "babe-ruth",
          length: 186,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Casey Stengel",
          content:
            "Finding good players is easy. Getting them to play as a team is another story.",
          tags: ["Sports", "Competition"],
          authorSlug: "casey-stengel",
          length: 78,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Billie Jean King",
          content: "Champions keep playing until they get it right.",
          tags: ["Sports", "Competition"],
          authorSlug: "billie-jean-king",
          length: 47,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Elon Musk",
          content:
            "If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion.",
          tags: ["Business"],
          authorSlug: "elon-musk",
          length: 124,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "P. G. Wodehouse",
          content: "To find a man's true character, play golf with him.",
          tags: ["Sports", "Competition"],
          authorSlug: "p-g-wodehouse",
          length: 51,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ken Venturi",
          content:
            "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
          tags: ["Motivational"],
          authorSlug: "ken-venturi",
          length: 126,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Shaquille O'Neal",
          content:
            "I'm tired of hearing about money, money, money, money, money. I just want to play the game, drink Pepsi, and wear Reebok.",
          tags: ["Sports", "Humorous"],
          authorSlug: "shaquille-o-neal",
          length: 121,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ralph Marston",
          content: "What you do today can improve all your tomorrows.",
          tags: ["Motivational"],
          authorSlug: "ralph-marston",
          length: 49,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Howard H. Aiken",
          content:
            "Don't worry about people stealing your ideas. If your ideas are any good, you'll have to ram them down people's throats.",
          tags: ["Business"],
          authorSlug: "howard-h-aiken",
          length: 120,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Woodrow Wilson",
          content:
            "Golf is a game in which one endeavors to control a ball with implements ill adapted for the purpose.",
          tags: ["Sports", "Competition"],
          authorSlug: "woodrow-wilson",
          length: 100,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Mia Hamm",
          content:
            "I am building a fire, and everyday I train, I add more fuel. At just the right moment, I light the match.",
          tags: ["Sports", "Competition"],
          authorSlug: "mia-hamm",
          length: 105,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Jeff Bezos",
          content:
            "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
          tags: ["Business"],
          authorSlug: "jeff-bezos",
          length: 110,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ted Williams",
          content:
            "Baseball is the only field of endeavor where a man can succeed three times out of ten and be considered a good performer.",
          tags: ["Sports", "Competition"],
          authorSlug: "ted-williams",
          length: 121,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Harriet Beecher Stowe",
          content:
            "Never give up, for that is just the place and time that the tide will turn.",
          tags: ["Motivational"],
          authorSlug: "harriet-beecher-stowe",
          length: 75,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Johann Wolfgang von Goethe",
          content:
            "Knowing is not enough; we must apply. Willing is not enough; we must do.",
          tags: ["Motivational"],
          authorSlug: "johann-wolfgang-von-goethe",
          length: 72,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Jack Welch",
          content:
            "An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.",
          tags: ["Business"],
          authorSlug: "jack-welch",
          length: 123,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Bennis",
          content:
            "Trust is the lubrication that makes it possible for organizations to work.",
          tags: ["Business"],
          authorSlug: "warren-bennis",
          length: 74,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Laurence J. Peter",
          content:
            "An economist is an expert who will know tomorrow why the things he predicted yesterday didn't happen today.",
          tags: ["Business"],
          authorSlug: "laurence-j-peter",
          length: 107,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Colin Powell",
          content:
            "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
          tags: ["Success"],
          authorSlug: "colin-powell",
          length: 103,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Robert Kiyosaki",
          content: "When times are bad is when the real entrepreneurs emerge.",
          tags: ["Business"],
          authorSlug: "robert-kiyosaki",
          length: 57,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "W. Clement Stone",
          content: "Aim for the moon. If you miss, you may hit a star.",
          tags: ["Motivational"],
          authorSlug: "w-clement-stone",
          length: 50,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Michael Phelps",
          content:
            "You can't put a limit on anything. The more you dream, the farther you get.",
          tags: ["Sports", "Competition"],
          authorSlug: "michael-phelps",
          length: 75,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Confucius",
          content:
            "The superior man understands what is right; the inferior man understands what will sell.",
          tags: ["Business"],
          authorSlug: "confucius",
          length: 88,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Howard H. Aiken",
          content:
            "Don't worry about people stealing your ideas. If your ideas are any good, you'll have to ram them down people's throats.",
          tags: ["Business"],
          authorSlug: "howard-h-aiken",
          length: 120,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ted Williams",
          content:
            "Baseball is the only field of endeavor where a man can succeed three times out of ten and be considered a good performer.",
          tags: ["Sports", "Competition"],
          authorSlug: "ted-williams",
          length: 121,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "William James",
          content:
            "Most people never run far enough on their first wind to find out they've got a second.",
          tags: ["Sports", "Competition"],
          authorSlug: "william-james",
          length: 86,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "John F. Kennedy",
          content: "Things do not happen. Things are made to happen.",
          tags: ["Motivational"],
          authorSlug: "john-f-kennedy",
          length: 48,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "John Madden",
          content:
            "The fewer rules a coach has, the fewer rules there are for players to break.",
          tags: ["Sports", "Competition"],
          authorSlug: "john-madden",
          length: 76,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Kyle Chandler",
          content:
            "Opportunity does not knock, it presents itself when you beat down the door.",
          tags: ["Motivational"],
          authorSlug: "kyle-chandler",
          length: 75,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Mark Twain",
          content:
            "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
          tags: ["Business"],
          authorSlug: "mark-twain",
          length: 88,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Yogi Berra",
          content: "Half the lies they tell about me aren't true.",
          tags: ["Sports", "Competition"],
          authorSlug: "yogi-berra",
          length: 45,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Eric Liddell",
          content: "God made me fast. And when I run, I feel His pleasure.",
          tags: ["Sports", "Competition"],
          authorSlug: "eric-liddell",
          length: 54,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Erma Bombeck",
          content:
            "If a man watches three football games in a row, he should be declared legally dead.",
          tags: ["Sports", "Humorous"],
          authorSlug: "erma-bombeck",
          length: 83,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "John Kenneth Galbraith",
          content:
            "Meetings are indispensable when you don't want to do anything.",
          tags: ["Business"],
          authorSlug: "john-kenneth-galbraith",
          length: 62,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Hank Aaron",
          content:
            "My motto was always to keep swinging. Whether I was in a slump or feeling badly or having trouble off the field, the only thing to do was keep swinging.",
          tags: ["Sports", "Competition"],
          authorSlug: "hank-aaron",
          length: 152,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Jeff Bezos",
          content:
            "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
          tags: ["Business"],
          authorSlug: "jeff-bezos",
          length: 110,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Earl Monroe",
          content:
            "Just be patient. Let the game come to you. Don't rush. Be quick, but don't hurry.",
          tags: ["Sports", "Competition"],
          authorSlug: "earl-monroe",
          length: 81,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Benjamin Disraeli",
          content: "Never complain and never explain.",
          tags: ["Motivational"],
          authorSlug: "benjamin-disraeli",
          length: 33,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Mike Singletary (basketball)",
          content:
            "Do you know what my favorite part of the game is? The opportunity to play.",
          tags: ["Sports", "Competition"],
          authorSlug: "mike-singletary-basketball",
          length: 74,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Edward Gibbon",
          content: "Our work is the presentation of our capabilities.",
          tags: ["Business"],
          authorSlug: "edward-gibbon",
          length: 49,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "André Malraux",
          content: "To command is to serve, nothing more and nothing less.",
          tags: ["Business"],
          authorSlug: "andre-malraux",
          length: 54,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Warren Bennis",
          content:
            "Trust is the lubrication that makes it possible for organizations to work.",
          tags: ["Business"],
          authorSlug: "warren-bennis",
          length: 74,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Robert Griffin III",
          content:
            "Football is football and talent is talent. But the mindset of your team makes all the difference.",
          tags: ["Sports", "Competition"],
          authorSlug: "robert-griffin-iii",
          length: 97,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Heywood Broun",
          content: "Sports do not build character. They reveal it.",
          tags: ["Sports", "Competition"],
          authorSlug: "heywood-broun",
          length: 46,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "W. Clement Stone",
          content: "Aim for the moon. If you miss, you may hit a star.",
          tags: ["Motivational"],
          authorSlug: "w-clement-stone",
          length: 50,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Colin Powell",
          content:
            "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
          tags: ["Success"],
          authorSlug: "colin-powell",
          length: 103,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ralph Marston",
          content: "What you do today can improve all your tomorrows.",
          tags: ["Motivational"],
          authorSlug: "ralph-marston",
          length: 49,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "William Blake",
          content: "No bird soars too high if he soars with his own wings.",
          tags: ["Motivational"],
          authorSlug: "william-blake",
          length: 54,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Sam Walton",
          content:
            "There is only one boss. The customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else.",
          tags: ["Business"],
          authorSlug: "sam-walton",
          length: 150,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Bob Knight",
          content:
            "You don't play against opponents, you play against the game of basketball.",
          tags: ["Sports", "Competition"],
          authorSlug: "bob-knight",
          length: 74,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Tom Brokaw",
          content:
            "It's easy to make a buck. It's a lot tougher to make a difference.",
          tags: ["Business"],
          authorSlug: "tom-brokaw",
          length: 66,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Reggie Jackson (basketball, born 1990)",
          content: "Fans don't boo nobodies.",
          tags: ["Sports", "Competition"],
          authorSlug: "reggie-jackson-basketball-born-1990",
          length: 24,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Elon Musk",
          content:
            "When something is important enough, you do it even if the odds are not in your favor.",
          tags: ["Motivational"],
          authorSlug: "elon-musk",
          length: 85,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Thomas Jefferson",
          content:
            "I hope we shall crush in its birth the aristocracy of our monied corporations which dare already to challenge our government to a trial by strength, and bid defiance to the laws of our country.",
          tags: ["Business"],
          authorSlug: "thomas-jefferson",
          length: 193,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Billie Jean King",
          content: "Champions keep playing until they get it right.",
          tags: ["Sports", "Competition"],
          authorSlug: "billie-jean-king",
          length: 47,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ayn Rand",
          content:
            "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
          tags: ["Motivational"],
          authorSlug: "ayn-rand",
          length: 87,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Niccolò Machiavelli",
          content:
            "No enterprise is more likely to succeed than one concealed from the enemy until it is ripe for execution.",
          tags: ["Business"],
          authorSlug: "niccolo-machiavelli",
          length: 105,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ambrose Bierce",
          content:
            "The gambling known as business looks with austere disfavor upon the business known as gambling.",
          tags: ["Business"],
          authorSlug: "ambrose-bierce",
          length: 95,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Henry David Thoreau",
          content:
            "Many men go fishing all of their lives without knowing that it is not fish they are after.",
          tags: ["Sports", "Competition"],
          authorSlug: "henry-david-thoreau",
          length: 90,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Bob Feller",
          content:
            "Every day is a new opportunity. You can build on yesterday's success or put its failures behind and start over again. That's the way life is, with a new game every day, and that's the way baseball is.",
          tags: ["Sports", "Competition"],
          authorSlug: "bob-feller",
          length: 200,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Vince Lombardi",
          content: "Winners never quit and quitters never win.",
          tags: ["Sports", "Competition"],
          authorSlug: "vince-lombardi",
          length: 42,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Wayne Gretzky",
          content:
            "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.",
          tags: ["Sports", "Competition"],
          authorSlug: "wayne-gretzky",
          length: 104,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Babe Ruth",
          content:
            "The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world, but if they don't play together, the club won't be worth a dime.",
          tags: ["Sports", "Competition"],
          authorSlug: "babe-ruth",
          length: 186,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Babe Ruth",
          content: "You just can't beat the person who never gives up.",
          tags: ["Motivational"],
          authorSlug: "babe-ruth",
          length: 50,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Rogers Hornsby",
          content:
            "People ask me what I do in winter when there's no baseball. I'll tell you what I do. I stare out the window and wait for spring.",
          tags: ["Sports", "Competition"],
          authorSlug: "rogers-hornsby",
          length: 128,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Peter Drucker",
          content:
            "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.",
          tags: ["Business"],
          authorSlug: "peter-drucker",
          length: 95,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Dan Gable",
          content:
            "Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.",
          tags: ["Sports", "Competition"],
          authorSlug: "dan-gable",
          length: 115,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Laurence J. Peter",
          content:
            "An economist is an expert who will know tomorrow why the things he predicted yesterday didn't happen today.",
          tags: ["Business"],
          authorSlug: "laurence-j-peter",
          length: 107,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Johann Wolfgang von Goethe",
          content:
            "Knowing is not enough; we must apply. Willing is not enough; we must do.",
          tags: ["Motivational"],
          authorSlug: "johann-wolfgang-von-goethe",
          length: 72,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Casey Stengel",
          content:
            "Finding good players is easy. Getting them to play as a team is another story.",
          tags: ["Sports", "Competition"],
          authorSlug: "casey-stengel",
          length: 78,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Michael Jordan",
          content:
            "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
          tags: ["Sports", "Competition", "Famous Quotes"],
          authorSlug: "michael-jordan",
          length: 224,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Arnold Palmer",
          content:
            "What other people may find in poetry or art museums, I find in the flight of a good drive.",
          tags: ["Sports", "Competition"],
          authorSlug: "arnold-palmer",
          length: 90,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Theodore Isaac Rubin",
          content:
            "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.",
          tags: ["Business"],
          authorSlug: "theodore-isaac-rubin",
          length: 160,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Muhammad Ali",
          content:
            "It's just a job. Grass grows, birds fly, waves pound the sand. I beat people up.",
          tags: ["Sports"],
          authorSlug: "muhammad-ali",
          length: 80,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "George Orwell",
          content:
            "Serious sport has nothing to do with fair play. It is bound up with hatred, jealousy, boastfulness, disregard of all rules and sadistic pleasure in witnessing violence. In other words, it is war minus the shooting.",
          tags: ["Sports"],
          authorSlug: "george-orwell",
          length: 214,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Seneca the Younger",
          content:
            "If one does not know to which port one is sailing, no wind is favorable.",
          tags: ["Wisdom"],
          authorSlug: "seneca-the-younger",
          length: 72,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Mia Hamm",
          content:
            "I am building a fire, and everyday I train, I add more fuel. At just the right moment, I light the match.",
          tags: ["Sports", "Competition"],
          authorSlug: "mia-hamm",
          length: 105,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Shaquille O'Neal",
          content:
            "I'm tired of hearing about money, money, money, money, money. I just want to play the game, drink Pepsi, and wear Reebok.",
          tags: ["Sports", "Humorous"],
          authorSlug: "shaquille-o-neal",
          length: 121,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Mary Kay Ash",
          content:
            "Everyone has an invisible sign hanging from their neck saying, 'Make me feel important.' Never forget this message when working with people.",
          tags: ["Business"],
          authorSlug: "mary-kay-ash",
          length: 140,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Jim Bouton",
          content:
            "You spend a good piece of your life gripping a baseball and in the end it turns out that it was the other way around all the time.",
          tags: ["Sports", "Competition"],
          authorSlug: "jim-bouton",
          length: 130,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Ken Venturi",
          content:
            "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
          tags: ["Motivational"],
          authorSlug: "ken-venturi",
          length: 126,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Harriet Beecher Stowe",
          content:
            "Never give up, for that is just the place and time that the tide will turn.",
          tags: ["Motivational"],
          authorSlug: "harriet-beecher-stowe",
          length: 75,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Nikos Kazantzakis",
          content: "In order to succeed, we must first believe that we can.",
          tags: ["Motivational"],
          authorSlug: "nikos-kazantzakis",
          length: 55,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "Government of the people, by the people, for the people, shall not perish from the Earth.",
          tags: ["History", "Politics", "Famous Quotes"],
          authorSlug: "abraham-lincoln",
          length: 89,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "The philosophy of the school room in one generation will be the philosophy of government in the next.",
          tags: ["History", "Politics"],
          authorSlug: "abraham-lincoln",
          length: 101,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "The best argument against democracy is a five-minute conversation with the average voter.",
          tags: ["Humorous", "Politics"],
          authorSlug: "winston-churchill",
          length: 89,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "How many legs does a dog have if you call his tail a leg? Four. Saying that a tail is a leg doesn't make it a leg.",
          tags: ["Truth"],
          authorSlug: "abraham-lincoln",
          length: 114,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content: "History is written by the victors.",
          tags: ["History"],
          authorSlug: "winston-churchill",
          length: 34,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content: "If you're going through hell, keep going.",
          tags: ["Inspirational"],
          authorSlug: "winston-churchill",
          length: 41,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content: "No man has a good enough memory to be a successful liar.",
          tags: ["Truth"],
          authorSlug: "abraham-lincoln",
          length: 56,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",
          tags: ["Social Justice", "Freedom", "History"],
          authorSlug: "winston-churchill",
          length: 120,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "It has been my experience that folks who have no vices have very few virtues.",
          tags: ["Wisdom"],
          authorSlug: "abraham-lincoln",
          length: 77,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "I have always found that mercy bears richer fruits than strict justice.",
          tags: ["Wisdom"],
          authorSlug: "abraham-lincoln",
          length: 71,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "You and I are all as much continuous with the physical universe as a wave is continuous with the ocean.",
          tags: ["Philosophy"],
          authorSlug: "alan-watts",
          length: 103,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "You are that vast thing that you see far, far off with great telescopes.",
          tags: ["Philosophy", "Spirituality", "Self"],
          authorSlug: "alan-watts",
          length: 72,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "I am a firm believer in the people. If given the truth, they can be depended upon to meet any national crisis. The great point is to bring them the real facts.",
          tags: ["Politics", "History"],
          authorSlug: "abraham-lincoln",
          length: 159,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content: "To improve is to change; to be perfect is to change often.",
          tags: ["Inspirational", "Success"],
          authorSlug: "winston-churchill",
          length: 58,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content: "If I were two-faced, would I be wearing this one?",
          tags: ["Humorous"],
          authorSlug: "abraham-lincoln",
          length: 49,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content: "I will prepare and some day my chance will come.",
          tags: ["Success"],
          authorSlug: "abraham-lincoln",
          length: 48,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "How is it possible that a being with such sensitive jewels as the eyes, such enchanted musical instruments as the ears, and such fabulous arabesque of nerves as the brain can experience itself anything less than a god.",
          tags: ["Philosophy"],
          authorSlug: "alan-watts",
          length: 218,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "When I do good I feel good, when I do bad I feel bad, and that's my religion.",
          tags: ["Wisdom", "Character"],
          authorSlug: "abraham-lincoln",
          length: 77,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "But I'll tell you what hermits realize. If you go off into a far, far forest and get very quiet, you'll come to understand that you're connected with everything.",
          tags: ["Nature"],
          authorSlug: "alan-watts",
          length: 161,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "Nothing in life is so exhilarating as to be shot at without result.",
          tags: ["War"],
          authorSlug: "winston-churchill",
          length: 67,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "An appeaser is one who feeds a crocodile, hoping it will eat him last.",
          tags: ["Humorous"],
          authorSlug: "winston-churchill",
          length: 70,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "And the attitude of faith is the very opposite of clinging to belief, of holding on.",
          tags: ["Faith"],
          authorSlug: "alan-watts",
          length: 84,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content: "Attitude is a little thing that makes a big difference.",
          tags: [],
          authorSlug: "winston-churchill",
          length: 55,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
          tags: ["Change", "Life"],
          authorSlug: "alan-watts",
          length: 96,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content: "The ballot is stronger than the bullet.",
          tags: ["Politics", "Famous Quotes"],
          authorSlug: "abraham-lincoln",
          length: 39,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "I have realized that the past and future are real illusions, that they exist in the present, which is what there is and all there is.",
          tags: ["Time", "Life"],
          authorSlug: "alan-watts",
          length: 133,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "Never pretend to a love which you do not actually feel, for love is not ours to command.",
          tags: ["Love"],
          authorSlug: "alan-watts",
          length: 88,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "The inherent vice of capitalism is the unequal sharing of blessings; the inherent virtue of socialism is the equal sharing of miseries.",
          tags: ["Politics", "Conservative"],
          authorSlug: "winston-churchill",
          length: 135,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content: "I owe my solitude to other people.",
          tags: ["Humorous"],
          authorSlug: "alan-watts",
          length: 34,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "The farther backward you can look, the farther forward you can see.",
          tags: ["History"],
          authorSlug: "winston-churchill",
          length: 67,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "Unless one is able to live fully in the present, the future is a hoax.",
          tags: ["Life", "Future"],
          authorSlug: "alan-watts",
          length: 70,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "If we open a quarrel between past and present, we shall find that we have lost the future.",
          tags: ["History"],
          authorSlug: "winston-churchill",
          length: 90,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "We are masters of the unsaid words, but slaves of those we let slip out.",
          tags: ["Wisdom"],
          authorSlug: "winston-churchill",
          length: 72,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now.",
          tags: ["Future", "Life"],
          authorSlug: "alan-watts",
          length: 169,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content: "All that I am, or hope to be, I owe to my angel mother.",
          tags: ["Family"],
          authorSlug: "abraham-lincoln",
          length: 55,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "But at any rate, the point is that God is what nobody admits to being, and everybody really is.",
          tags: ["Philosophy", "Self"],
          authorSlug: "alan-watts",
          length: 95,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "I am an optimist. It does not seem too much use being anything else.",
          tags: [],
          authorSlug: "winston-churchill",
          length: 68,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "Always bear in mind that your own resolution to succeed is more important than any other.",
          tags: ["Success"],
          authorSlug: "abraham-lincoln",
          length: 89,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "The ego is nothing other than the focus of conscious attention.",
          tags: [],
          authorSlug: "alan-watts",
          length: 63,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "In wartime, truth is so precious that she should always be attended by a bodyguard of lies.",
          tags: ["War", "History"],
          authorSlug: "winston-churchill",
          length: 91,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "Now this is not the end. It is not even the beginning of the end. But it is, perhaps, the end of the beginning.",
          tags: [],
          authorSlug: "winston-churchill",
          length: 111,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content: "Russia is a riddle wrapped in a mystery inside an enigma.",
          tags: ["History", "Politics"],
          authorSlug: "winston-churchill",
          length: 57,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "Courage is rightly esteemed the first of human qualities... because it is the quality which guarantees all others.",
          tags: ["Courage"],
          authorSlug: "winston-churchill",
          length: 114,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.",
          tags: ["Wisdom"],
          authorSlug: "abraham-lincoln",
          length: 131,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "A lie gets halfway around the world before the truth has a chance to get its pants on.",
          tags: ["History", "Politics", "Wisdom"],
          authorSlug: "winston-churchill",
          length: 86,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "Sir, my concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
          tags: ["Spirituality", "History"],
          authorSlug: "abraham-lincoln",
          length: 119,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live by the light that I have. I must stand with anybody that stands right, and stand with him while he is right, and part with him when he goes wrong.",
          tags: ["Inspirational", "History", "Truth"],
          authorSlug: "abraham-lincoln",
          length: 246,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "You cannot escape the responsibility of tomorrow by evading it today.",
          tags: ["History"],
          authorSlug: "abraham-lincoln",
          length: 69,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.",
          tags: ["Humorous", "Famous Quotes"],
          authorSlug: "winston-churchill",
          length: 85,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "So then, the relationship of self to other is the complete realization that loving yourself is impossible without loving everything defined as other than yourself.",
          tags: ["Self", "Love"],
          authorSlug: "alan-watts",
          length: 163,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "You don't look out there for God, something in the sky, you look in you.",
          tags: ["Spirituality", "Religion"],
          authorSlug: "alan-watts",
          length: 72,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "Things are as they are. Looking out into it the universe at night, we make no comparisons between right and wrong stars, nor between well and badly arranged constellations.",
          tags: ["Philosophy", "Self"],
          authorSlug: "alan-watts",
          length: 172,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "Trying to define yourself is like trying to bite your own teeth.",
          tags: ["Humorous"],
          authorSlug: "alan-watts",
          length: 64,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "You can always count on Americans to do the right thing - after they've tried everything else.",
          tags: ["Humorous", "Politics"],
          authorSlug: "winston-churchill",
          length: 94,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "Success consists of going from failure to failure without loss of enthusiasm.",
          tags: ["Success"],
          authorSlug: "winston-churchill",
          length: 77,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content:
            "We the people are the rightful masters of both Congress and the courts, not to overthrow the Constitution but to overthrow the men who pervert the Constitution.",
          tags: ["Politics"],
          authorSlug: "abraham-lincoln",
          length: 160,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "But the attitude of faith is to let go, and become open to truth, whatever it might turn out to be.",
          tags: ["Faith"],
          authorSlug: "alan-watts",
          length: 99,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "We cannot be more sensitive to pleasure without being more sensitive to pain.",
          tags: ["Life", "Pain"],
          authorSlug: "alan-watts",
          length: 77,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "It is no use saying, 'We are doing our best.' You have got to succeed in doing what is necessary.",
          tags: ["Inspirational", "Success"],
          authorSlug: "winston-churchill",
          length: 97,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "The truth is incontrovertible. Malice may attack it, ignorance may deride it, but in the end, there it is.",
          tags: ["Truth", "History"],
          authorSlug: "winston-churchill",
          length: 106,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "To have faith is to trust yourself to the water. When you swim you don't grab hold of the water, because if you do you will sink and drown. Instead you relax, and float.",
          tags: ["Faith"],
          authorSlug: "alan-watts",
          length: 169,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Alan Watts",
          content:
            "Technology is destructive only in the hands of people who do not realize that they are one and the same process as the universe.",
          tags: ["Technology"],
          authorSlug: "alan-watts",
          length: 128,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Abraham Lincoln",
          content: "Most folks are as happy as they make up their minds to be.",
          tags: ["Happiness"],
          authorSlug: "abraham-lincoln",
          length: 58,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Winston Churchill",
          content:
            "I am always ready to learn although I do not always like being taught.",
          tags: ["Humorous"],
          authorSlug: "winston-churchill",
          length: 70,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Henry Ford",
          content:
            "Whether you think you can or you think you can't, you are right.",
          tags: ["Famous Quotes", "Inspirational"],
          authorSlug: "henry-ford",
          length: 64,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Eric Hoffer",
          content:
            "In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.",
          tags: ["Famous Quotes", "Inspirational"],
          authorSlug: "eric-hoffer",
          length: 146,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Amy Poehler",
          content: "There's power in looking silly and not caring that you do.",
          tags: ["Famous Quotes", "Inspirational"],
          authorSlug: "amy-poehler",
          length: 58,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Helmut Schmidt",
          content: "The biggest room in the world is room for improvement.",
          tags: ["Famous Quotes", "Inspirational"],
          authorSlug: "helmut-schmidt",
          length: 54,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Larry Page",
          content:
            "If you're changing the world, you're working on important things. You're excited to get up in the morning.",
          tags: ["Famous Quotes", "Inspirational"],
          authorSlug: "larry-page",
          length: 106,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          author: "Neil Gaiman",
          content:
            "The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So write and draw and build and play and dance and live as only you can.",
          tags: ["Famous Quotes", "Inspirational"],
          authorSlug: "neil-gaiman",
          length: 177,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "Wisdom, compassion, and courage are the three universally recognized moral qualities of men.",
          author: "Confucius",
          tags: ["Wisdom"],
          authorSlug: "confucius",
          length: 92,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "With age comes wisdom and a high sex drive. And the wisdom to enjoy it.",
          author: "Amber Valletta",
          tags: ["Wisdom"],
          authorSlug: "amber-valletta",
          length: 71,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content: "You can't blame gravity for falling in love.",
          author: "Albert Einstein",
          tags: ["Famous Quotes", "Humorous"],
          authorSlug: "albert-einstein",
          length: 44,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "The things that one most wants to do are the things that are probably most worth doing.",
          author: "Winifred Holtby",
          tags: ["Wisdom"],
          authorSlug: "winifred-holtby",
          length: 87,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content: "Make it your habit not to be critical about small things.",
          author: "Edward Everett Hale",
          tags: ["Wisdom"],
          authorSlug: "edward-everett-hale",
          length: 57,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content: "Friendship, like credit, is highest when it is not used.",
          author: "Elbert Hubbard",
          tags: ["Friendship"],
          authorSlug: "elbert-hubbard",
          length: 56,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "The least of things with a meaning is worth more in life than the greatest of things without it.",
          author: "Carl Jung",
          tags: ["Life"],
          authorSlug: "carl-jung",
          length: 96,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
          author: "Julie Morgenstern",
          tags: ["Wisdom", "Success"],
          authorSlug: "julie-morgenstern",
          length: 115,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "When a thing is done, it's done. Don't look back. Look forward to your next objective.",
          author: "George Marshall",
          tags: ["Wisdom"],
          authorSlug: "george-marshall",
          length: 86,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "There is some self-interest behind every friendship. There is no friendship without self-interests. This is a bitter truth.",
          author: "Chanakya",
          tags: ["Friendship"],
          authorSlug: "chanakya",
          length: 123,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "Don't talk about what you have done or what you are going to do.",
          author: "Thomas Jefferson",
          tags: ["Wisdom"],
          authorSlug: "thomas-jefferson",
          length: 64,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "You can stand tall without standing on someone. You can be a victor without having victims.",
          author: "Harriet Woods",
          tags: ["Wisdom", "Character"],
          authorSlug: "harriet-woods",
          length: 91,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
          author: "Albert Schweitzer",
          tags: ["Famous Quotes", "Success", "Happiness"],
          authorSlug: "albert-schweitzer",
          length: 125,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content: "Silence is the sleep that nourishes wisdom.",
          author: "Francis Bacon",
          tags: ["Wisdom"],
          authorSlug: "francis-bacon",
          length: 43,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "Friendship increases in visiting friends, but in visiting them seldom.",
          author: "Francis Bacon",
          tags: ["Friendship"],
          authorSlug: "francis-bacon",
          length: 70,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "He who controls others may be powerful, but he who has mastered himself is mightier still.",
          author: "Laozi",
          tags: ["Wisdom"],
          authorSlug: "laozi",
          length: 90,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "To be wronged is nothing unless you continue to remember it.",
          author: "Confucius",
          tags: ["Wisdom"],
          authorSlug: "confucius",
          length: 60,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
        {
          content:
            "Friends are those rare people who ask how we are and then wait to hear the answer.",
          author: "Ed Cunningham",
          tags: ["Friendship"],
          authorSlug: "ed-cunningham",
          length: 82,
          creatorId: "68b590526dcd7c1d020ff8d7",
        },
      ],
    });

    await db.statusCode.createMany({
      data: [
        {
          statusCode: 100,
          statusMessage: "Continue",
          description:
            "The initial part of the request has been received, and the client should proceed with the rest of the request.",
          category: "Informational",
        },
        {
          statusCode: 101,
          statusMessage: "Switching Protocols",
          description:
            "The server agrees to switch protocols specified in the Upgrade header field of the request.",
          category: "Informational",
        },
        {
          statusCode: 102,
          statusMessage: "Processing",
          description:
            "The server has received and is processing the request but has not yet completed the process.",
          category: "Informational",
        },
        {
          statusCode: 103,
          statusMessage: "Early Hints",
          description:
            "The server is sending some hints to the client even before the final response is available.",
          category: "Informational",
        },
        {
          statusCode: 200,
          statusMessage: "OK",
          description:
            "The request has succeeded, and the requested resource is returned as the response.",
          category: "Success",
        },
        {
          statusCode: 201,
          statusMessage: "Created",
          description:
            "The request has been fulfilled, and a new resource has been created as a result.",
          category: "Success",
        },
        {
          statusCode: 202,
          statusMessage: "Accepted",
          description:
            "The request has been accepted for processing, but the processing is not complete.",
          category: "Success",
        },
        {
          statusCode: 203,
          statusMessage: "Non-Authoritative Information",
          description:
            "The server is a transforming proxy that has received the request but has modified the response.",
          category: "Success",
        },
        {
          statusCode: 204,
          statusMessage: "No Content",
          description:
            "The server has successfully processed the request, but there is no content to return.",
          category: "Success",
        },
        {
          statusCode: 205,
          statusMessage: "Reset Content",
          description:
            "The server instructs the client to reset the current resource.",
          category: "Success",
        },
        {
          statusCode: 206,
          statusMessage: "Partial Content",
          description:
            "The server has fulfilled the partial GET request for the resource.",
          category: "Success",
        },
        {
          statusCode: 207,
          statusMessage: "Multi-Status",
          description:
            "The response status is a collection of independent responses, potentially differing in status.",
          category: "Success",
        },
        {
          statusCode: 208,
          statusMessage: "Already Reported",
          description:
            "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.",
          category: "Success",
        },
        {
          statusCode: 218,
          statusMessage: "This Is Fine",
          description:
            "Used as an Easter egg or joke, indicating that the server is returning a response despite encountering an error or problematic situation.",
          category: "Unofficial",
        },
        {
          statusCode: 226,
          statusMessage: "IM Used",
          description:
            "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
          category: "Success",
        },
        {
          statusCode: 300,
          statusMessage: "Multiple Choices",
          description:
            "The requested resource has multiple choices, each with its own URI and representation.",
          category: "Redirection",
        },
        {
          statusCode: 301,
          statusMessage: "Moved Permanently",
          description:
            "The requested resource has been permanently moved to a new location.",
          category: "Redirection",
        },
        {
          statusCode: 302,
          statusMessage: "Found",
          description:
            "The requested resource has been temporarily moved to a different location.",
          category: "Redirection",
        },
        {
          statusCode: 303,
          statusMessage: "See Other",
          description:
            "The response to the request can be found at a different URI.",
          category: "Redirection",
        },
        {
          statusCode: 304,
          statusMessage: "Not Modified",
          description: "The client can use a cached version of the response.",
          category: "Redirection",
        },
        {
          statusCode: 307,
          statusMessage: "Temporary Redirect",
          description:
            "The requested resource is temporarily located at a different URI.",
          category: "Redirection",
        },
        {
          statusCode: 308,
          statusMessage: "Permanent Redirect",
          description:
            "The requested resource has been permanently moved to a different URI.",
          category: "Redirection",
        },
        {
          statusCode: 400,
          statusMessage: "Bad Request",
          description:
            "The server cannot process the request due to client error.",
          category: "Client Error",
        },
        {
          statusCode: 401,
          statusMessage: "Unauthorized",
          description: "The request requires user authentication.",
          category: "Client Error",
        },
        {
          statusCode: 402,
          statusMessage: "Payment Required",
          description: "Reserved for future use.",
          category: "Client Error",
        },
        {
          statusCode: 403,
          statusMessage: "Forbidden",
          description:
            "The server understands the request but refuses to fulfill it.",
          category: "Client Error",
        },
        {
          statusCode: 404,
          statusMessage: "Not Found",
          description:
            "The requested resource could not be found on the server.",
          category: "Client Error",
        },
        {
          statusCode: 405,
          statusMessage: "Method Not Allowed",
          description: "The requested method is not allowed for the resource.",
          category: "Client Error",
        },
        {
          statusCode: 406,
          statusMessage: "Not Acceptable",
          description:
            "The server cannot produce a response matching the client's requested characteristics.",
          category: "Client Error",
        },
        {
          statusCode: 407,
          statusMessage: "Proxy Authentication Required",
          description: "The client must authenticate itself to a proxy server.",
          category: "Client Error",
        },
        {
          statusCode: 408,
          statusMessage: "Request Timeout",
          description:
            "The server timed out waiting for the request from the client.",
          category: "Client Error",
        },
        {
          statusCode: 409,
          statusMessage: "Conflict",
          description:
            "The request could not be completed due to a conflict with the current state of the target resource.",
          category: "Client Error",
        },
        {
          statusCode: 410,
          statusMessage: "Gone",
          description:
            "The requested resource is no longer available and has been permanently removed.",
          category: "Client Error",
        },
        {
          statusCode: 411,
          statusMessage: "Length Required",
          description:
            "The server requires a Content-Length header in the request.",
          category: "Client Error",
        },
        {
          statusCode: 412,
          statusMessage: "Precondition Failed",
          description:
            "One or more conditions in the request header fields evaluated to false.",
          category: "Client Error",
        },
        {
          statusCode: 413,
          statusMessage: "Payload Too Large",
          description:
            "The server refused to process the request because the payload is too large.",
          category: "Client Error",
        },
        {
          statusCode: 414,
          statusMessage: "URI Too Long",
          description:
            "The server refused the request because the URI is too long.",
          category: "Client Error",
        },
        {
          statusCode: 415,
          statusMessage: "Unsupported Media Type",
          description: "The server does not support the request's media type.",
          category: "Client Error",
        },
        {
          statusCode: 416,
          statusMessage: "Range Not Satisfiable",
          description: "The requested range is not satisfiable.",
          category: "Client Error",
        },
        {
          statusCode: 417,
          statusMessage: "Expectation Failed",
          description:
            "The server cannot meet the requirements specified by the Expect request header.",
          category: "Client Error",
        },
        {
          statusCode: 418,
          statusMessage: "I'm a teapot",
          description:
            "This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. However, known implementations do exist.",
          category: "Client Error",
        },
        {
          statusCode: 419,
          statusMessage: "Authentication Timeout",
          description:
            "Similar to 401 Unauthorized, but indicates that the client's session has expired and needs to reauthenticate.",
          category: "Unofficial",
        },
        {
          statusCode: 420,
          statusMessage: "Method Failure",
          description:
            "A non-standard status code typically used to indicate that a method failed on the server.",
          category: "Unofficial",
        },
        {
          statusCode: 422,
          statusMessage: "Unprocessable Entity",
          description:
            "The server understands the content of the request but cannot process it due to semantic errors or business logic failures.",
          category: "Unofficial",
        },
        {
          statusCode: 423,
          statusMessage: "Locked",
          description:
            "The requested resource is locked and cannot be accessed until a specified condition is met.",
          category: "Unofficial",
        },
        {
          statusCode: 424,
          statusMessage: "Failed Dependency",
          description:
            "The request failed due to the failure of a previous request.",
          category: "Unofficial",
        },
        {
          statusCode: 428,
          statusMessage: "Precondition Required",
          description:
            "The server requires the request to be conditional, typically requiring the inclusion of a specific header field.",
          category: "Unofficial",
        },
        {
          statusCode: 429,
          statusMessage: "Too Many Requests",
          description:
            "The user has sent too many requests in a given amount of time, exceeding the server's rate limit.",
          category: "Unofficial",
        },
        {
          statusCode: 431,
          statusMessage: "Request Header Fields Too Large",
          description:
            "The server refuses to process the request because the request headers are too large.",
          category: "Unofficial",
        },
        {
          statusCode: 451,
          statusMessage: "Unavailable For Legal Reasons",
          description:
            "The server is denying access to the resource due to legal reasons, such as censorship or government-mandated restrictions.",
          category: "Unofficial",
        },
        {
          statusCode: 500,
          statusMessage: "Internal Server Error",
          description: "A generic server error has occurred.",
          category: "Server Error",
        },
        {
          statusCode: 501,
          statusMessage: "Not Implemented",
          description:
            "The server does not support the functionality required to fulfill the request.",
          category: "Server Error",
        },
        {
          statusCode: 502,
          statusMessage: "Bad Gateway",
          description:
            "The server, while acting as a gateway or proxy, received an invalid response from an upstream server.",
          category: "Server Error",
        },
        {
          statusCode: 503,
          statusMessage: "Service Unavailable",
          description:
            "The server is currently unable to handle the request due to temporary overloading or maintenance.",
          category: "Server Error",
        },
        {
          statusCode: 504,
          statusMessage: "Gateway Timeout",
          description:
            "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.",
          category: "Server Error",
        },
        {
          statusCode: 505,
          statusMessage: "HTTP Version Not Supported",
          description:
            "The server does not support the HTTP protocol version used in the request.",
          category: "Server Error",
        },
        {
          statusCode: 506,
          statusMessage: "Variant Also Negotiates",
          description:
            "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself and is therefore not a proper end point in the negotiation process.",
          category: "Server Error",
        },
        {
          statusCode: 507,
          statusMessage: "Insufficient Storage",
          description:
            "The server is unable to store the representation needed to complete the request.",
          category: "Server Error",
        },
        {
          statusCode: 508,
          statusMessage: "Loop Detected",
          description:
            "The server detected an infinite loop while processing the request.",
          category: "Server Error",
        },
        {
          statusCode: 510,
          statusMessage: "Not Extended",
          description:
            "The policy for accessing the requested resource requires further extensions to be made by the client.",
          category: "Server Error",
        },
        {
          statusCode: 511,
          statusMessage: "Network Authentication Required",
          description:
            "The client needs to authenticate to gain network access.",
          category: "Server Error",
        },
      ],
    });
  } catch (error) {
    console.log("🔴 Error in seed script 🔴", error);
  } finally {
    await db.$disconnect();
    process.exit();
  }
}

main();
