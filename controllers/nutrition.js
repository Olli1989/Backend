  export const nutritionInfoProduct = async (req, res) => {
    const { searchTerm } = req.body
    try {
        console.log(searchTerm)

        res.status(201).json({result:"its working product"})
    } catch(error) {
        res.status(500).json({message: "Something went wrong"})
    }

  }

  export const nutritionInfoBarcode = async (req, res) => {
    const { searchTerm } = req.body
    console.log(searchTerm)
    try {


        res.status(201).json({result:"its working barcode"})
    } catch(error) {
        res.status(500).json({message: "Something went wrong"})
    }

  }