
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch show details. Status: ${response.status}`);
        }

        const data = await response.json();
        setShowDetails(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [id]);

  return (
    <div>
      <h2>Show Details</h2>
      {showDetails ? 
     (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
  sx={{ height: 400 }}
  image={showDetails.image.medium}
  title="Green Iguana"
/>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {showDetails.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(showDetails.summary, { ALLOWED_TAGS: [] }) }} />
        </Typography>
      </CardContent>
     
    </Card>
     )
      : (
        <p>Loading...</p>
      )
      }
      
    </div>
  );
};

export default ShowDetails;
