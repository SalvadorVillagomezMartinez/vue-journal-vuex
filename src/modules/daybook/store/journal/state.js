export default()=>({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
            picture: null,

        },
        {
            id: new Date().getTime() +1000,
            date: new Date().toDateString(),
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
            picture: null,

        },
        {
            id: new Date().getTime()+ 2000,
            date: new Date().toDateString(),
            text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
            picture: null,

        },

    ]
})