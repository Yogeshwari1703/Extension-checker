
# Browser Extension Manager

A React-based application that demonstrates browser extension management with enable/disable functionality. This project simulates how Chrome's management API would work in a real browser extension environment.

## Features

- **Extension Detection**: Simulates detection of installed browser extensions
- **Enable/Disable Toggle**: Allows users to toggle extension status
- **API Integration**: Uses JSONPlaceholder API to fetch sample data
- **Chrome API Simulation**: Demonstrates how Chrome's management API would work
- **Responsive Design**: Works on both desktop and mobile devices
- **Real-time Statistics**: Shows counts of enabled/disabled extensions

## Project Structure

```
extension-manager/
├── public/
│   └── index.html          # Main HTML file with Font Awesome CDN
├── src/
│   ├── components/
│   │   ├── Header.js       # Header component with title and subtitle
│   │   ├── Instructions.js # Usage instructions and Chrome API info
│   │   ├── Stats.js        # Statistics component showing extension counts
│   │   ├── ExtensionCard.js # Individual extension card component
│   │   └── ExtensionList.js # Container for extension cards
│   ├── App.js              # Main application component
│   ├── App.css             # Global application styles
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation (this file)
```

## Components Overview

### Header.js
Displays the application title and subtitle with a puzzle piece icon.

### Instructions.js
Provides usage instructions and information about Chrome's extension API limitations.

### Stats.js
Shows statistics about the extensions:
- Total number of extensions
- Number of enabled extensions
- Number of disabled extensions

### ExtensionCard.js
Displays individual extension information:
- Extension name with icon
- Description
- Unique ID
- Enabled/disabled status with visual badge
- Toggle button to enable/disable
- Last updated timestamp

### ExtensionList.js
Container component that renders multiple ExtensionCard components.

### App.js
Main component that:
- Manages application state
- Handles API calls
- Coordinates between components
- Implements extension toggle functionality

## API Integration

The application integrates with two APIs:

1. **JSONPlaceholder API**: Fetches user data and transforms it into extension format
2. **Chrome Management API Simulation**: Demonstrates how the real Chrome API would work

### Chrome API Note
The Chrome Management API is only available in browser extension environments, not regular web pages. This application simulates the API behavior for demonstration purposes.

## Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **View Extensions**: The application loads with a list of sample extensions
2. **Toggle Status**: Click the "Enable" or "Disable" buttons to change extension status
3. **Switch API Mode**: Use the toggle to switch between JSON API and Chrome API simulation
4. **Reload Data**: Click "Reload Extensions" to fetch new data

## Technologies Used

- **React**: Frontend framework
- **JavaScript (ES6+)**: Programming language
- **CSS3**: Styling with gradients, flexbox, and grid
- **Font Awesome**: Icons
- **JSONPlaceholder API**: Free fake API for testing

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Limitations

- The Chrome Management API simulation only works in actual browser extensions
- This is a demonstration project and doesn't interact with real browser extensions
- Data is reset when the page is refreshed

## Future Enhancements

- Add persistence using localStorage
- Implement real Chrome extension functionality
- Add search and filter capabilities
- Include more detailed extension information
- Add import/export functionality for extension lists

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- JSONPlaceholder for providing a free fake API
- Font Awesome for the icons
- React team for the excellent framework

---

**Note**: This is a demonstration project for educational purposes. It does not actually manage real browser extensions but simulates how such functionality would work.
```
