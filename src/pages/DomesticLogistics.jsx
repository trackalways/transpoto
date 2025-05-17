import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Container, Box, Grid, Card, CardContent, Typography, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaTruck, FaWarehouse, FaMapMarkedAlt, FaClock, FaShieldAlt } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function DomesticLogistics() {
  return (
    <div className="page-root min-h-screen flex flex-col">
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f5f7fa', pt: '80px' }}>
        {/* Hero Section */}
        <Box sx={{ background: 'linear-gradient(to right, #0369a1, #075985)', color: 'white', py: 8 }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" fontWeight={700} mb={2}>Domestic Logistics</Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: '#38bdf8', mb: 3 }} />
              <Typography variant="h5" sx={{ maxWidth: 800, mb: 3, color: '#e0f2fe' }}>
                Efficient domestic cargo transport, warehousing, and distribution services tailored to meet business and individual needs
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
                Request a Quote
              </Button>
            </motion.div>
          </Container>
        </Box>

        {/* Service Overview */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h4" fontWeight={700} mb={2} color="primary.dark">
                  Kenya's Most Reliable Domestic Logistics
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  From Nairobi to Mombasa and everywhere in between, we offer comprehensive domestic logistics solutions designed for Kenya's unique transportation needs.
                </Typography>
                
                <Box sx={{ mt: 4, mb: 4 }}>
                  {[
                    { icon: <FaTruck />, text: '200+ vehicles in our fleet' },
                    { icon: <FaMapMarkedAlt />, text: 'Coverage across all 47 counties' },
                    { icon: <FaClock />, text: '98% on-time delivery rate' },
                    { icon: <FaShieldAlt />, text: 'Cargo insurance available' }
                  ].map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: '#0284c7', mr: 2 }}>{item.icon}</Box>
                      <Typography>{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
                
                <Box sx={{ p: 3, bgcolor: '#f0f9ff', borderRadius: 2, borderLeft: '4px solid #0284c7' }}>
                  <Typography sx={{ fontStyle: 'italic', color: '#1e3a8a', fontWeight: 500 }}>
                    "Our dedicated team ensures your goods move safely and efficiently across Kenya with real-time tracking and updates."
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: -15, left: -15, width: '70%', height: '70%', bgcolor: '#f0f9ff', zIndex: 1 }} />
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Domestic logistics"
                    sx={{ width: '100%', borderRadius: 2, boxShadow: 3, position: 'relative', zIndex: 2 }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Service Benefits */}
        <Box sx={{ bgcolor: '#f8fafc', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" fontWeight={700} mb={6} align="center" color="primary.dark">
              Our Domestic Logistics Solutions
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  icon: <FaTruck className="text-4xl text-transpoto-600" />,
                  title: 'Transportation',
                  description: 'Full truckload, less-than-truckload, and specialized transport solutions'
                },
                {
                  icon: <FaWarehouse className="text-4xl text-transpoto-600" />,
                  title: 'Warehousing',
                  description: 'Secure storage facilities with inventory management across Kenya'
                },
                {
                  icon: <FaMapMarkedAlt className="text-4xl text-transpoto-600" />,
                  title: 'Distribution',
                  description: 'Last-mile delivery solutions for retail and business customers'
                }
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card sx={{ p: 3, height: '100%' }} elevation={2}>
                      <CardContent>
                        <Box sx={{ mb: 2 }}>{item.icon}</Box>
                        <Typography variant="h6" fontWeight={700} gutterBottom>{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
