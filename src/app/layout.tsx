import React from 'react';
import  '@/styles/globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Todo App</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2023 Todo App</p>
        </footer>
      </body>
    </html>
  );
}