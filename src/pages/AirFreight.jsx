import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaPlane, FaGlobe, FaClock, FaShieldAlt, FaBoxOpen } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function AirFreight() {
  return (
    <div className="page-root min-h-screen flex flex-col">
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f5f7fa', pt: '80px' }}>
        {/* Hero Section */}
        <Box sx={{ 
          background: 'linear-gradient(rgba(3, 105, 161, 0.8), rgba(7, 89, 133, 0.8))', 
          color: 'white', 
          py: 12,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }} />
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" fontWeight={700} mb={2}>Air Freight Solutions</Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: '#38bdf8', mb: 3 }} />
              <Typography variant="h5" sx={{ maxWidth: 800, mb: 4, color: '#e0f2fe' }}>
                Fast and secure global air cargo solutions with customs clearance and real-time tracking
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'white', 
                  color: '#0369a1',
                  '&:hover': { bgcolor: '#f0f9ff' }
                }}
              >
                Request Air Freight Quote
              </Button>
            </motion.div>
          </Container>
        </Box>

        {/* Service Benefits */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" fontWeight={700} mb={6} align="center" color="primary.dark">
              Our Air Freight Services
            </Typography>
            
            <Grid container spacing={6} sx={{ mb: 8 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: 4, 
                  bgcolor: 'white', 
                  borderRadius: 2, 
                  boxShadow: 1,
                  height: '100%'
                }}>
                  <FaPlane className="text-4xl text-transpoto-600 mb-4" />
                  <Typography variant="h5" fontWeight={600} mb={3}>Express Air Freight</Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    For time-sensitive shipments requiring the fastest possible transit times with priority handling at every stage.
                  </Typography>
                  <ul className="space-y-2 mb-4">
                    {[
                      '24-72 hour delivery windows',
                      'Priority airport handling',
                      'Dedicated account management',
                      'Real-time tracking'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaShieldAlt className="text-transpoto-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  p: 4, 
                  bgcolor: 'white', 
                  borderRadius: 2, 
                  boxShadow: 1,
                  height: '100%'
                }}>
                  <FaBoxOpen className="text-4xl text-transpoto-600 mb-4" />
                  <Typography variant="h5" fontWeight={600} mb={3}>Standard Air Freight</Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    Cost-effective air transport solutions for less urgent shipments with reliable transit times.
                  </Typography>
                  <ul className="space-y-2 mb-4">
                    {[
                      '3-7 day delivery windows',
                      'Consolidated cargo options',
                      'Dangerous goods handling',
                      'Customs clearance included'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaShieldAlt className="text-transpoto-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Grid>
            </Grid>
          </motion.div>

          {/* Global Network */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Box sx={{ 
              p: 6, 
              bgcolor: '#f0f9ff', 
              borderRadius: 2,
              textAlign: 'center'
            }}>
              <FaGlobe className="text-5xl text-transpoto-600 mx-auto mb-4" />
              <Typography variant="h4" fontWeight={700} mb={3} color="primary.dark">
                Global Air Network
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                We partner with major airlines and ground handlers worldwide to ensure seamless air freight solutions to over 200 countries.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: 4,
                mt: 4
              }}>
                {['JFK', 'LHR', 'DXB', 'HKG', 'NBO'].map((code, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box sx={{ 
                      bgcolor: 'white', 
                      p: 3, 
                      borderRadius: '50%',
                      width: 80,
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 1
                    }}>
                      <Typography variant="h5" fontWeight={700}>{code}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
