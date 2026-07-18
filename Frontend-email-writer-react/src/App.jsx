// import { useState } from 'react'

// import './App.css'
// import axios from "axios";
// import { Box,Button,CircularProgress,Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';


// function App() {
//   const [emailContent, setEmailContent] = useState('');
//   const[tone,setTone]=useState('');
//   const[generatedReply,setGeneratedReply]=useState('');
//   const[loading,setLoading]=useState(false);
//   const[error,setError]=useState('');

// const handleSubmit=async()=>
// {
//  setLoading(true);
//  setError('')
//  try{
//    const response=await axios.post("http://localhost:9090/api/email/generate",{
// emailContent,
//    tone
//  }
//    );
//    setGeneratedReply(typeof response.data==='string'?response.data:JSON.stringify(response.data));
//  } 
//  catch(error)
//  {
//   setError('Failed to generate email reply. Please try again');
//   console.error(error);
//  }
//  finally{
//   setLoading(false);
//  }

// }

//   return (
//     <Container maxWidth="md" sx={{py:4}}>
//       <Typography variant='h3' component="h1" gutterBottom>
//         Email Reply Generator
//       </Typography>
//       <Box sx={{mx:3}}>
//         <TextField
//         fullWidth
//         multiline
//         rows={6}
//         variant='outlined'
//         label='Original Email Content'
//         value={emailContent || ''}
//         onChange={(e)=>setEmailContent(e.target.value)}
//         sx={{mb:2}}
//   />
//         <FormControl fullWidth sx={{mb:2}}>
//         <InputLabel>Tone(Optional)</InputLabel>
//         <Select
//         value={tone || ''}
//         label={"Tone (Optional)"}
//         onChange={(e)=>setTone(e.target.value)}>
//           <MenuItem value="">None</MenuItem>
//            <MenuItem value="Professional">Professional</MenuItem>
//             <MenuItem value="Casual">Casual</MenuItem>
//              <MenuItem value="Friendly">Friendly</MenuItem>
//         </Select>
//         </FormControl>
//         <Button
//         variant='contained'
//         onClick={handleSubmit}
//         disabled={!emailContent || loading}
//         >
//           {loading? <CircularProgress size={24}/>: "Generate Replay"}
//         </Button>
//       </Box>

//       {
//         error && (
//           <Typography color='error' sx={{mb:2}}>
//             {error}
//           </Typography>
//         )
//       }

//       {generatedReply && (
//         <Box sx={{mt:3}}>
//           <Typography variant='h6' gutterBottom>
//             Generated Reply
//           </Typography>
//           <TextField
//           fullWidth
//           multiline
//           rows={6}
//           variant='outlined'
//           value={generatedReply || ''}
//           inputProps={{readOnly:true}}></TextField>

//           <Button
//           variant='outlined'
//           sx={{mt:2}}
//           onClick={()=>navigator.clipboard.writeText(generatedReply)}>
//             Copy to Clipboard
//           </Button>
//         </Box>
//       )}
//     </Container>
//   )
// }

// export default App




import { useState } from "react";
import "./App.css";
import axios from "axios";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://ai-email-reply-generator-16w6.onrender.com/api/email/generate",
        {
          emailContent,
          tone,
        }
      );

      setGeneratedReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmailContent("");
    setTone("");
    setGeneratedReply("");
    setError("");
  };

  return (
    <Box className="app-background">
      <Container maxWidth="md" className="app-container">
        <Card className="app-card">
          <CardContent>
            <Typography variant="h3" className="title">
             🤖 AI Email Reply Generator
            </Typography>

            <Typography className="subtitle">
              Generate professional email replies using Gemini AI
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              label="Original Email Content"
              variant="outlined"
              className="input-field"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />

            <FormControl fullWidth className="input-field">
              <InputLabel>Tone</InputLabel>

              <Select
                value={tone}
                label="Tone"
                onChange={(e) => setTone(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="Professional">Professional</MenuItem>
                <MenuItem value="Friendly">Friendly</MenuItem>
                <MenuItem value="Casual">Casual</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              fullWidth
              className="generate-btn"
              disabled={!emailContent || loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} color="inherit" />
                  &nbsp;Generating...
                </>
              ) : (
                " Generate Reply"
              )}
            </Button>

            {error && (
              <Typography color="error" className="error-text">
                {error}
              </Typography>
            )}

            {generatedReply && (
              <Box className="reply-section">
                <Typography variant="h6" gutterBottom>
                  Generated Reply
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  value={generatedReply}
                  inputProps={{ readOnly: true }}
                />

                <Stack
                  direction="row"
                  spacing={2}
                  className="button-group"
                >
                  <Button
                    variant="outlined"
                    onClick={() =>
                      navigator.clipboard.writeText(generatedReply)
                    }
                  >
                    📋 Copy
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={handleClear}
                  >
                    🗑 Clear
                  </Button>
                </Stack>
              </Box>
            )}
          </CardContent>
        </Card>

        <Typography className="footer">
          Powered by React • Spring Boot • Gemini AI
        </Typography>
      </Container>
    </Box>
  );
}

export default App;