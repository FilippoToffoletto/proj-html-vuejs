import { reactive } from 'vue'

export const store=reactive({
    events: {
        heading: {
            title: 'Upcoming Events',
            subtitle: 'Meet The Author in Person'
        },
        cards: [
            {
                img: 'event-05-1200x719.jpg',
                title: 'Chicago Book Signing',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error, id nemo dolores iusto quasi quo ea. Odit eius est impedit dolorum qui assumenda? Error, voluptas ex? Voluptatibus, quos? Velit?'
            },
            {
                img: 'event-04-1200x719.jpg',
                title: 'Meet & Greet With Amanda',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error, id nemo dolores iusto quasi quo ea. Odit eius est impedit dolorum qui assumenda? Error, voluptas ex? Voluptatibus, quos? Velit?'
            },
            {
                img: 'event-07-1200x719.jpg',
                title: 'Open Book: Dialogues',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error, id nemo dolores iusto quasi quo ea. Odit eius est impedit dolorum qui assumenda? Error, voluptas ex? Voluptatibus, quos? Velit?'
            }
        ]
    },
    FindOut: {
        heading: {
            title: 'Dig A Little Deeper Into Damon Vaughn',
            subtitle: 'Find out more about the author himself',
        },
        cards: [
            {
                img: 'box-1.jpg',
                title: 'About Me',
                subtitle: 'Lorem ipsum dolor sit amet.'
            },
            {
                img: 'box-4.jpg',
                title: 'My Latest Book',
                subtitle: 'Lorem ipsum dolor sit amet.'
            },
            {
                img: 'box-3.jpg',
                title: 'Book Signing',
                subtitle: 'Lorem ipsum dolor sit amet.'
            }
        ]
    },
    articles: {
        heading: {
            title: 'Recent Articles',
            subtitle: 'Read the latest entries',
            button: 'All Articles'
        },
        main_card: {
            img: '20-Tips-1200x706.jpg',
            title: '20 Creativity Tips',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est pariatur quibusdam! Minus quibusdam itaque blanditiis deleniti nostrum ab nulla.',
            info: {
                author: 'admin',
                date: 'October 24th, 2019',
                categories: 'Event, Tips & Trick',
                comments: 0,
            }
        },

        cards: [
            {
                img: 'thumb-13-2x-700x441.jpg',
                title: 'What\'s On Your Booklist?',
                info: {
                    date: 'October 24th, 2019',
                    comments: 0,
                }
            },
            {
                img: 'thumb-08-2x-700x441.jpg',
                title: 'Istanbul Travel Guide',
                info: {
                    date: 'October 24th, 2019',
                    comments: 0,
                }
            },

        ]
    },
    getImageUrl(name) {
        return new URL(`../images/${name}`, import.meta.url).href
    }
})