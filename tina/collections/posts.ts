import { Collection } from "tinacms";

const Post: Collection = {
    name: "post",
    label: "Posts",
    path: "content/posts",
    fields: [
        {
        type: "string",
        name: "title",
        label: "Title",
        isTitle: true,
        required: true,
        },
        {
        type: "string",
        name: "description",
        label: "Description",
        required: true,
        },
        {
        type: "datetime",
        name: "date",
        label: "Date",
        ui: {
            dateFormat: 'YYYY-MM-DD',
        }
        },
        {
        type: "string",
        name: "categories",
        label: "Categories",
        list: true,
        },
        {
        type: "string",
        name: "tags",
        label: "Tags",
        list: true,
        },
        {
        type: "image",
        name: "image",
        label: "Image",
        },
        {
        type: "number",
        name: "weight",
        label: "Weight"
        },
        {
        type: "boolean",
        name: "comments",
        label: "Comments"
        },
        {
        type: "rich-text",
        name: "body",
        label: "Body",
        isBody: true,
        },
    ]
}

export default Post;