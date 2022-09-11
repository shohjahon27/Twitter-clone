export default {
  name: "post",
  type: "Post",
  title: "Document",
  fields: [
    {
      name: "title",
      type: "Title",
      title: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxlength: 96,
      },
    },
  ],
};
