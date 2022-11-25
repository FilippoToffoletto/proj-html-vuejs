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
    getImageUrl(name) {
        return new URL(`../images/${name}`, import.meta.url).href
    }
})