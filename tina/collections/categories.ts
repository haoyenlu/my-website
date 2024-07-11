import { Collection } from "tinacms";


const Category: Collection = {
    name: "category",
    label: "Category",
    path: "content/categories",
    fields: [
        {
        type: "string",
        name: "title",
        label: "Title"
        },
        {
        type: "string",
        name: "description",
        label: "Description"
        },
        {
        type: "image",
        name: "image",
        label: "Image"
        }
    ]
}

export default Category;