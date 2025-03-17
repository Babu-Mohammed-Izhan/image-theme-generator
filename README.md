# Image Theme Generator

Welcome to the Image Theme Generator! This project, along with the [`imagethemebackend`](https://github.com/Babu-Mohammed-Izhan/imagethemebackend.git) repository, represents my first full-stack project. The Image Theme Generator allows users to upload images and generate color schemes based on the image's colors.

## How It Works

1. **Image Upload**: Users can upload images to the application.
2. **Cloudinary Integration**: The uploaded images are stored using Cloudinary.
3. **Color Extraction**: The application uses the Colormind API to extract color schemes from the uploaded images.
4. **Display**: All images along with their generated color schemes are displayed to the user.
5. **Copy Colors**: Users can click on any color to copy its value to the clipboard.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/image-theme-generator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd image-theme-generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Color Extraction**: Colormind API

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to me at [your-email@example.com].

Enjoy using the Image Theme Generator!

Specs:

    Image data:
    title
    url,
    colorscheme1,
    colorscheme2,
    colorscheme3,
    colorscheme4,
    colorscheme5

    data stream:

    all_data -> display-all-images-with-schemes

    img upload -> cloudinary url -> image-color -> generate-scheme(imagethemebackend API)

    Features:

    click color to copy
