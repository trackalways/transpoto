import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaEnvelope, FaClock, FaMapMarkedAlt, FaCheckCircle, FaShieldAlt, FaBoxOpen } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function ParcelDocumentShipping() {
  return (
    <div className="page-root min-h-screen flex flex-col">
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f5f7fa', pt: '80px' }}>
        {/* Hero Section */}
        <Box sx={{ 
          background: 'linear-gradient(rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.8))', 
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1566153580922-19f62a3dcdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
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
              <Typography variant="h2" fontWeight={700} mb={2}>Parcel & Document Shipping</Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: '#93c5fd', mb: 3 }} />
              <Typography variant="h5" sx={{ maxWidth: 800, mb: 4, color: '#e0f2fe' }}>
                Send your important documents and small parcels anywhere in Kenya or worldwide with Transpoto's secure, fast, and affordable service.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: '#2563eb', 
                  '&:hover': { bgcolor: '#1d4ed8' },
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                }}
              >
                Get a Quote
              </Button>
            </motion.div>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 10 }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h3" fontWeight={700} mb={1} align="center" color="#1e3a8a">
                Our Parcel & Document Services
              </Typography>
              <Typography variant="h6" align="center" color="#3b82f6" mb={6}>
                Fast, secure, and reliable shipping solutions
              </Typography>
            </motion.div>

            <Grid container spacing={4} mt={2}>
              <Grid item xs={12} md={4}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Box sx={{ 
                    bgcolor: 'white', 
                    borderRadius: 4, 
                    p: 4, 
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-8px)' }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#dbeafe', 
                        borderRadius: '50%', 
                        width: 60, 
                        height: 60, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mr: 2
                      }}>
                        <FaEnvelope size={28} color="#2563eb" />
                      </Box>
                      <Typography variant="h5" fontWeight={600} color="#1e3a8a">
                        Express Delivery
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="#64748b">
                      Same-day and next-day delivery options for urgent documents and parcels. Our express service ensures your items arrive exactly when needed.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={4}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Box sx={{ 
                    bgcolor: 'white', 
                    borderRadius: 4, 
                    p: 4, 
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-8px)' }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#dbeafe', 
                        borderRadius: '50%', 
                        width: 60, 
                        height: 60, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mr: 2
                      }}>
                        <FaMapMarkedAlt size={28} color="#2563eb" />
                      </Box>
                      <Typography variant="h5" fontWeight={600} color="#1e3a8a">
                        Nationwide & Global
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="#64748b">
                      We deliver across Kenya and to international destinations. Our extensive network ensures your parcels reach even the most remote locations.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={4}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Box sx={{ 
                    bgcolor: 'white', 
                    borderRadius: 4, 
                    p: 4, 
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-8px)' }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        bgcolor: '#dbeafe', 
                        borderRadius: '50%', 
                        width: 60, 
                        height: 60, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        mr: 2
                      }}>
                        <FaShieldAlt size={28} color="#2563eb" />
                      </Box>
                      <Typography variant="h5" fontWeight={600} color="#1e3a8a">
                        Secure & Reliable
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="#64748b">
                      Sensitive documents are handled with care and delivered securely. We prioritize the safety and integrity of your important items.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={{ bgcolor: '#dbeafe', py: 10 }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" fontWeight={700} mb={2} align="center" color="#1e3a8a">
                Why Choose Transpoto?
              </Typography>
              <Typography variant="h6" align="center" color="#3b82f6" mb={6} sx={{ maxWidth: 800, mx: 'auto' }}>
                Our dedicated team ensures your parcels and documents are delivered safely, on time, and with full transparency.
              </Typography>

              <Grid container spacing={4} mt={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', mb: 4 }}>
                    <Box sx={{ mr: 3 }}>
                      <FaClock size={24} color="#2563eb" />
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="#1e3a8a" mb={1}>
                        Timely Delivery
                      </Typography>
                      <Typography variant="body1" color="#334155">
                        We understand the importance of deadlines. Our delivery network is optimized for speed and efficiency.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', mb: 4 }}>
                    <Box sx={{ mr: 3 }}>
                      <FaCheckCircle size={24} color="#2563eb" />
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="#1e3a8a" mb={1}>
                        Real-Time Tracking
                      </Typography>
                      <Typography variant="body1" color="#334155">
                        Monitor your shipment's journey from pickup to delivery with our advanced tracking system.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', mb: 4 }}>
                    <Box sx={{ mr: 3 }}>
                      <FaBoxOpen size={24} color="#2563eb" />
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="#1e3a8a" mb={1}>
                        Specialized Packaging
                      </Typography>
                      <Typography variant="body1" color="#334155">
                        We provide custom packaging solutions to ensure your documents and parcels are protected during transit.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: 'flex', mb: 4 }}>
                    <Box sx={{ mr: 3 }}>
                      <FaMapMarkedAlt size={24} color="#2563eb" />
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="#1e3a8a" mb={1}>
                        Door-to-Door Service
                      </Typography>
                      <Typography variant="body1" color="#334155">
                        Enjoy the convenience of pickup and delivery right at your doorstep, saving you time and effort.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                <Button 
                  variant="contained" 
                  size="large"
                  href="/contact"
                  sx={{ 
                    bgcolor: '#2563eb', 
                    '&:hover': { bgcolor: '#1d4ed8' },
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                  }}
                >
                  Get Started Today
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
