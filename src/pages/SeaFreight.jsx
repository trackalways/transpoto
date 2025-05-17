import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaShip, FaAnchor, FaBoxes, FaGlobe, FaShieldAlt } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function SeaFreight() {
  return (
    <div className="page-root">
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f5f7fa' }}>
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1562420659-6a2a3a9a9c1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
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
              <Typography variant="h2" fontWeight={700} mb={2}>Sea Freight Solutions</Typography>
              <Box sx={{ width: 80, height: 4, bgcolor: '#38bdf8', mb: 3 }} />
              <Typography variant="h5" sx={{ maxWidth: 800, mb: 4, color: '#e0f2fe' }}>
                Cost-effective ocean freight with end-to-end logistics management and customs clearance
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
                Request Sea Freight Quote
              </Button>
            </motion.div>
          </Container>
        </Box>

        {/* Service Options */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h4" fontWeight={700} mb={6} align="center" color="primary.dark">
              Our Sea Freight Services
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
                  <FaBoxes className="text-4xl text-transpoto-600 mb-4" />
                  <Typography variant="h5" fontWeight={600} mb={3}>Full Container Load (FCL)</Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    Exclusive use of a container for your cargo, providing security and cost-efficiency for larger shipments.
                  </Typography>
                  <ul className="space-y-2 mb-4">
                    {[
                      '20ft and 40ft container options',
                      'Door-to-door or port-to-port',
                      'Weekly departures',
                      'Temperature-controlled options'
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
                  <FaAnchor className="text-4xl text-transpoto-600 mb-4" />
                  <Typography variant="h5" fontWeight={600} mb={3}>Less than Container (LCL)</Typography>
                  <Typography variant="body1" color="text.secondary" mb={3}>
                    Share container space with other shipments for cost-effective transport of smaller cargo volumes.
                  </Typography>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Consolidation services',
                      'Weekly departures',
                      'Cargo insurance available',
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

          {/* Port Network */}
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
                Global Port Network
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={4}>
                We have established partnerships with major shipping lines and port operators worldwide to ensure reliable sea freight solutions.
              </Typography>
              
              <Grid container spacing={4} sx={{ mt: 4 }}>
                {[
                  { name: 'Mombasa Port', country: 'Kenya' },
                  { name: 'Rotterdam', country: 'Netherlands' },
                  { name: 'Shanghai', country: 'China' },
                  { name: 'Los Angeles', country: 'USA' },
                  { name: 'Dubai', country: 'UAE' },
                  { name: 'Hamburg', country: 'Germany' }
                ].map((port, i) => (
                  <Grid item xs={6} md={4} key={i}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Box sx={{ 
                        bgcolor: 'white', 
                        p: 3, 
                        borderRadius: 2,
                        boxShadow: 1,
                        height: '100%'
                      }}>
                        <FaShip className="text-3xl text-transpoto-600 mx-auto mb-2" />
                        <Typography variant="h6" fontWeight={600}>{port.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{port.country}</Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ 
              p: 6, 
              bgcolor: 'primary.main', 
              color: 'white',
              borderRadius: 2,
              textAlign: 'center'
            }}>
              <Typography variant="h4" fontWeight={700} mb={3}>
                Ready to Ship by Sea?
              </Typography>
              <Typography variant="body1" mb={4} sx={{ opacity: 0.9 }}>
                Our logistics experts will help you choose the most efficient and cost-effective sea freight solution for your cargo.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': { bgcolor: '#f0f9ff' }
                }}
              >
                Contact Our Sea Freight Team
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
