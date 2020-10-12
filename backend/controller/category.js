const Category = require('../model/category');

exports.createCategory = async (req, res, next) => {
  const { title } = req.body;
  const loweredCaseTitle = title.toLowerCase();
  const category = await Category.findOne({ title: loweredCaseTitle });
  if (category) {
    return res.status(400).json({ success: false, message: 'This category has exist' });
  }
  try {
    const newCategory = new Category({ title: loweredCaseTitle });
    await newCategory.save();
    return res
      .status(201)
      .json({ success: true, message: 'New category created successfully', category: newCategory });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.find({});
    return res.status(200).json({ success: true, category });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateCategory = async (req, res, next) => {
  const { title } = req.body;
  const id = req.params.id;

  const loweredCaseTitle = title.toLowerCase();

  const updatedCategory = {
    title: loweredCaseTitle,
  };

  try {
    const category = await Category.findByIdAndUpdate(id, updatedCategory);
    if (!category)
      return res
        .status(400)
        .json({ success: false, message: "Category with this ID doesn't exist" });

    return res.status(200).json({ success: true, message: 'Category successfully updated' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteCategory = async (req, res, next) => {
  const id = req.params.id;

  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category)
      return res
        .status(400)
        .json({ success: false, message: "Can't delete category that doesn't exist" });

    return res.status(200).json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
