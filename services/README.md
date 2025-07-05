# Services Directory

This directory contains all the business logic services for the Global Fitness backend application. Each service is responsible for a specific domain of the application and follows the single responsibility principle.

## Service Architecture

### 📁 **Service Structure**
```
services/
├── authService.js          # Authentication & authorization
├── userService.js          # User management operations
├── membershipService.js    # Membership plans & subscriptions
├── workoutService.js       # Workout plans & exercise management
├── bookingService.js       # Class bookings & scheduling
├── paymentService.js       # Payment processing & billing
├── notificationService.js  # Email & SMS notifications
├── index.js               # Central export file
└── README.md              # This documentation
```

## 🔧 **Service Descriptions**

### **AuthService**
Handles all authentication and authorization operations:
- User registration and login
- Password management (change, reset)
- JWT token generation and verification
- Session management
- Role-based access control

### **UserService**
Manages user-related operations:
- User CRUD operations
- Profile management
- User statistics and analytics
- Trainer-member assignments
- User status management

### **MembershipService**
Handles membership plans and subscriptions:
- Membership plan management
- Subscription lifecycle
- Plan upgrades/downgrades
- Membership statistics
- Expiry tracking and renewals

### **WorkoutService**
Manages workout-related functionality:
- Workout plan creation and management
- Exercise library management
- Workout logging and tracking
- Progress analytics
- Trainer-member workout assignments

### **BookingService**
Handles class bookings and scheduling:
- Class booking management
- Schedule management
- Waitlist functionality
- Check-in/check-out processes
- Booking statistics and analytics

### **PaymentService**
Processes payments and billing:
- Stripe integration for payment processing
- Payment history and tracking
- Refund management
- Subscription billing
- Payment analytics and reporting

### **NotificationService**
Manages all communication:
- Email notifications (welcome, reminders, confirmations)
- SMS notifications
- Bulk messaging
- Scheduled notifications
- Notification templates and analytics

## 🚀 **Usage Examples**

### **Authentication**
```javascript
const { authService } = require('./services');

// Register new user
const result = await authService.register({
  email: 'user@example.com',
  password: 'securePassword',
  firstName: 'John',
  lastName: 'Doe',
  role: 'member'
});

// Login user
const loginResult = await authService.login('user@example.com', 'password');
```

### **User Management**
```javascript
const { userService } = require('./services');

// Get user with pagination
const users = await userService.getAllUsers({
  page: 1,
  limit: 10,
  role: 'member',
  search: 'john'
});

// Update user profile
const updatedUser = await userService.updateUser(userId, {
  firstName: 'John',
  lastName: 'Smith'
});
```

### **Membership Operations**
```javascript
const { membershipService } = require('./services');

// Subscribe to membership plan
const subscription = await membershipService.subscribeToPlan(
  userId, 
  planId, 
  { method: 'stripe', transactionId: 'tx_123' }
);

// Get membership statistics
const stats = await membershipService.getMembershipStats();
```

### **Workout Management**
```javascript
const { workoutService } = require('./services');

// Create workout plan
const plan = await workoutService.createWorkoutPlan({
  name: 'Beginner Strength',
  description: 'Perfect for newcomers',
  difficulty: 'beginner',
  exercises: [...]
}, trainerId);

// Log workout session
const workout = await workoutService.logWorkout({
  workoutPlan: planId,
  duration: 45,
  caloriesBurned: 300,
  exercises: [...]
}, memberId);
```

### **Booking System**
```javascript
const { bookingService } = require('./services');

// Book a class
const booking = await bookingService.bookClass({
  classId: 'class123',
  scheduleId: 'schedule456'
}, memberId);

// Get member bookings
const bookings = await bookingService.getMemberBookings(memberId, {
  upcoming: true,
  page: 1,
  limit: 10
});
```

### **Payment Processing**
```javascript
const { paymentService } = require('./services');

// Process membership payment
const payment = await paymentService.processMembershipPayment({
  membershipId: 'plan123',
  paymentMethodId: 'pm_123',
  amount: 59.00
}, userId);

// Get payment history
const history = await paymentService.getPaymentHistory(userId, {
  page: 1,
  limit: 10,
  type: 'membership'
});
```

### **Notifications**
```javascript
const { notificationService } = require('./services');

// Send welcome email
await notificationService.sendWelcomeEmail(user);

// Send booking confirmation
await notificationService.sendBookingConfirmation(booking);

// Send bulk notification
await notificationService.sendBulkNotification(
  users, 
  { subject: 'Important Update', html: '...' }, 
  'email'
);
```

## 🔒 **Error Handling**

All services implement consistent error handling:

```javascript
try {
  const result = await authService.login(email, password);
  // Handle success
} catch (error) {
  // Error message will be descriptive and actionable
  console.error(error.message);
  // Example: "Login failed: Invalid credentials"
}
```

## 📊 **Response Format**

All services return consistent response formats:

```javascript
// Success Response
{
  success: true,
  data: { ... },
  message: "Operation completed successfully",
  pagination: { ... } // When applicable
}

// Error Response (thrown as Error)
throw new Error("Descriptive error message");
```

## 🔧 **Configuration Requirements**

### **Environment Variables**
```env
# Database
MONGODB_URI=mongodb://localhost:27017/globalfitness

# JWT
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=24h
JWT_REFRESH_SECRET=your-refresh-secret

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@globalfitness.com

# SMS (Twilio)
TWILIO_ACCOUNT_SID=your-account-sid
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+1234567890

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### **Dependencies**
```json
{
  "bcrypt": "^5.1.0",
  "jsonwebtoken": "^9.0.0",
  "mongoose": "^7.0.0",
  "stripe": "^12.0.0",
  "nodemailer": "^6.9.0",
  "twilio": "^4.0.0"
}
```

## 🧪 **Testing**

Each service should be thoroughly tested:

```javascript
// Example test structure
describe('AuthService', () => {
  describe('register', () => {
    it('should register a new user successfully', async () => {
      // Test implementation
    });
    
    it('should throw error for duplicate email', async () => {
      // Test implementation
    });
  });
});
```

## 🔄 **Integration**

Services are designed to work together seamlessly:

```javascript
// Example: Complete user onboarding flow
const user = await authService.register(userData);
await membershipService.subscribeToPlan(user.id, planId, paymentData);
await notificationService.sendWelcomeEmail(user);
```

## 📈 **Performance Considerations**

- All database queries use proper indexing
- Pagination is implemented for large datasets
- Bulk operations are batched to prevent rate limiting
- Caching strategies are implemented where appropriate
- Async/await is used consistently for non-blocking operations

## 🛡️ **Security Features**

- Password hashing with bcrypt (12 rounds)
- JWT token expiration and refresh
- Input validation and sanitization
- Rate limiting for sensitive operations
- Secure payment processing with Stripe
- Email/SMS verification for critical actions

This service architecture provides a robust, scalable foundation for the Global Fitness application backend.