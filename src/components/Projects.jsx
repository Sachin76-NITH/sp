import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

const projectDescription = `Developed and launched a dynamic college blog website, providing users with the ability to create and upload their blogs along with photos. Implemented a secure login feature to enhance user experience and privacy.

Key Features:
1. User-Created Blogs
2. Photo Upload
3. Secure Login Feature`;

const cardData = [
  {
    title: 'LIBRARY MANAGEMENT SYSTEM ',
    imageUrl: 'https://www.dorsetonline.co.uk/theme-content/uploads/2020/07/library-books.jpg',
    description: (
      <div>
        <p>
        Developed a Library Management System incorporating advanced features for streamlined library operations and enhanced user experiences
        </p>
        <p>
          Key Features:
        </p>
        <ol>
          <li>User Authentication</li>
          <li>Catalog Management</li>
          <li>CRUD Operations</li>
        </ol>
      </div>
    ),
    link: 'https://lms-exiv-sachin76-nith.vercel.app/Register',
  },
  {
    title: 'COLLEGE-BLOG ',
    
    imageUrl: 'https://dcmep4q5dgnih.cloudfront.net/wp-content/uploads/2017/03/28151148/carousel1.jpg',
    description: (
      <div><br/>
        <p>
          Developed and launched a dynamic college blog website, providing users with the ability to create and upload their blogs along with photos. 
        </p>
        <p>
          Key Features:
        </p>
        <ol>
          <li>User-Created Blogs</li>
          <li>Photo Upload</li>
          <li>Secure Login Feature</li>
        </ol>
      </div>
    ),
    link: 'https://github.com/Sachin76-NITH/college-blog',
  },
  {
    title: 'T0 DO LIST WEB PAGE',
    imageUrl: 'https://www.lifeafterlaundry.com/wp-content/uploads/2014/01/daily-to-do-copy.jpg',
    description: (
      <div><br/>
        <p>
        Designed and developed a dynamic To-Do List application using a combination of
HTML, CSS, and JavaScript. The project aimed to enhance my front-end development skills and showcase my ability
to create user-friendly and interactive web applications
        </p>
        <p>
          Key Features:
        </p>
        <ol>
          <li>Task Creation</li>
          <li>Task Display</li>
          <li>Task Deletion</li>
          <li>User-Friendly Interface</li>
        </ol>
      </div>
    ),
    link: 'https://precious-raindrop-de194a.netlify.app//',
  },
  {
    title: 'CHAT WEB APP',
    imageUrl: 'https://cdn.dribbble.com/users/3041456/screenshots/9170914/__app-_____4x.jpg',
    description: (
      <div><br/>
        <p>
         I am currently dedicated to developing a chat web application, focusing on enhancing real-time
communication and user interaction. This project underscores my commitment to staying current with cutting-edge
web technologies
        </p>
        <p>
          Key Features:
        </p>
        <ol>
          <li>User Authentication</li>
          <li>Real-Time Messaging</li>
          <li>Group Chats</li>
          <li>One-on-One Chats</li>
        </ol>
      </div>
    ),
    link: 'https://github.com/Sachin76-NITH/chatapp',
  },
  // Add more card data as needed
];

export default function MultiActionAreaCard() {
  return (<div className='project'>
    {/* <div className='pl'> */}
    <div className='heading'>PROJECTS</div>
    <div className='cards'>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardActionArea component="a" href={card.link} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="140"
                    src={card.imageUrl} // Use the external image URL
                    alt={`Image ${index + 1}`}
                    style={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {/* Share */}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      {/* </div> */}
    </div>
    {/* <div className='pr'></div> */}
    </div>
   
  );
}
