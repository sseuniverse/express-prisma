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
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Charles Dickens",
          content:
            "No one is useless in this world who lightens the burdens of another.",
          tags: ["Generosity"],
          authorSlug: "charles-dickens",
          length: 68,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
          tags: ["Opportunity", "Work"],
          authorSlug: "thomas-edison",
          length: 91,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "Hell, there are no rules here-- we're trying to accomplish something.",
          tags: [],
          authorSlug: "thomas-edison",
          length: 69,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "If we all did the things we are capable of doing, we would literally astound ourselves.",
          tags: ["Inspirational", "Motivational"],
          authorSlug: "thomas-edison",
          length: 87,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "Genius is one per cent inspiration, ninety-nine per cent perspiration.",
          tags: ["Work", "Genius", "Inspirational", "Motivational"],
          authorSlug: "thomas-edison",
          length: 70,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Charles Dickens",
          content:
            "Train up a fig tree in the way it should go, and when you are old sit under the shade of it.",
          tags: ["Age", "Wisdom"],
          authorSlug: "charles-dickens",
          length: 92,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Charles Dickens",
          content:
            "I do not know the American gentleman, god forgive me for putting two such words together.",
          tags: ["Humorous"],
          authorSlug: "charles-dickens",
          length: 89,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content: "To invent, you need a good imagination and a pile of junk.",
          tags: ["Imagination", "Creativity", "Science", "Technology"],
          authorSlug: "thomas-edison",
          length: 58,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "If I find 10,000 ways something won't work, I haven't failed. I am not discouraged, because every wrong attempt discarded is another step forward.",
          tags: ["Perseverance", "Success", "Inspirational", "Motivational"],
          authorSlug: "thomas-edison",
          length: 146,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content: "I never did a day's work in my life.  It was all fun.",
          tags: ["Humorous"],
          authorSlug: "thomas-edison",
          length: 53,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "Results! Why, man, I have gotten a lot of results. I know several thousand things that won't work.",
          tags: ["Success", "Failure", "Perseverance"],
          authorSlug: "thomas-edison",
          length: 98,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Charles Dickens",
          content:
            "Minds, like bodies, will often fall into a pimpled, ill-conditioned state from mere excess of comfort.",
          tags: ["Weakness"],
          authorSlug: "charles-dickens",
          length: 102,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.",
          tags: ["Health", "Wellness"],
          authorSlug: "thomas-edison",
          length: 179,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content: "We don't know a millionth of one percent about anything.",
          tags: ["Knowledge"],
          authorSlug: "thomas-edison",
          length: 56,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content: "Everything comes to him who hustles while he waits.",
          tags: ["Success", "Motivational"],
          authorSlug: "thomas-edison",
          length: 51,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Charles Dickens",
          content:
            "Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.",
          tags: ["Gratitude"],
          authorSlug: "charles-dickens",
          length: 121,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "I never did anything worth doing by accident, nor did any of my inventions come by accident",
          tags: ["Success", "Science"],
          authorSlug: "thomas-edison",
          length: 91,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Charles Dickens",
          content: "We need never be ashamed of our tears.",
          tags: ["Sadness"],
          authorSlug: "charles-dickens",
          length: 38,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content: "As a cure for worrying, work is better than whisky.",
          tags: ["Humorous"],
          authorSlug: "thomas-edison",
          length: 51,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "There is no expedient to which a man will not go to avoid the labor of thinking.",
          tags: ["Work"],
          authorSlug: "thomas-edison",
          length: 80,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Thomas Edison",
          content:
            "Faith, as well intentioned as it may be, must be built on facts, not fiction--faith in fiction is a damnable false hope.",
          tags: ["Religion"],
          authorSlug: "thomas-edison",
          length: 120,
          creatorId: "68b32046c30d65957f521112",
        },
        {
          author: "Albert Einstein",
          content:
            "Gravitation cannot be held responsible for people falling in love. How on earth can you explain in terms of chemistry and physics so important a biological phenomenon as first love? Put your hand on a stove for a minute and it seems like an hour. Sit with that special girl for an hour and it seems like a minute. That's relativity.",
          tags: ["Love", "Science"],
          authorSlug: "albert-einstein",
          length: 332,
          creatorId: "68b32046c30d65957f521112",
        },
      ],
    });
  } catch (error) {
    console.log("🔴 Error in seed script 🔴", error);
  } finally {
    await db.$disconnect();
  }
}

main();
