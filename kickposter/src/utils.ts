import { Post } from "./types"

const posts: Post[] = [
    {
        id: 0,
        author: "ruby",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu."
    },
    {
        id: 1,
        author: "opal",
        text: "Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Diam sollicitudin tempor id eu. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Cursus risus at ultrices mi."
    },
    {
        id: 2,
        author: "onyx",
        text: "Nibh cras pulvinar mattis nunc. Magna sit amet purus gravida quis. Quis risus sed vulputate odio ut enim blandit volutpat."
    },
    {
        id: 3,
        author: "emerald",
        text: "Purus in massa tempor nec feugiat. Ut tristique et egestas quis ipsum suspendisse. Imperdiet nulla malesuada pellentesque elit eget."
    },
    {
        id: 4,
        author: "pyrite",
        text: "Diam ut venenatis tellus in metus vulputate eu. Viverra tellus in hac habitasse platea. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus."
    },
    {
        id: 5,
        author: "gold",
        text: "Eleifend mi in nulla posuere sollicitudin. Purus in massa tempor nec feugiat. Ut tristique et egestas quis ipsum suspendisse."
    },
    {
        id: 6,
        author: "silver",
        text: "Laoreet id donec ultrices tincidunt. A arcu cursus vitae congue mauris rhoncus."
    }
]

export const loadInitialData = function() {
    localStorage.setItem("posts", JSON.stringify(posts))
}