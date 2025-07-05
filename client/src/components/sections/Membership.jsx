import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Membership = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const { isDark } = useTheme()

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for getting started on your fitness journey',
      monthlyPrice: 29,
      yearlyPrice: 290,
      savings: 58,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access',
        'Community support',
        'Free WiFi'
      ],
      popular: false,
      color: 'from-gray-600 to-gray-700',
      icon: '🏃‍♂️'
    },
    {
      name: 'Premium',
      description: 'Our most popular plan with comprehensive benefits',
      monthlyPrice: 59,
      yearlyPrice: 590,
      savings: 118,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Guest passes (2 per month)',
        'Sauna & steam room access',
        'Priority booking',
        'Towel service'
      ],
      popular: true,
      color: 'from-primary-600 to-primary-700',
      icon: '💪'
    },
    {
      name: 'Elite',
      description: 'Premium experience with exclusive perks',
      monthlyPrice: 99,
      yearlyPrice: 990,
      savings: 198,
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Meal planning service',
        'Recovery massage (1 per month)',
        'VIP parking',
        'Exclusive member events',
        'Priority class booking',
        'Concierge service',
        'Guest passes (5 per month)'
      ],
      popular: false,
      color: 'from-yellow-500 to-yellow-600',
      icon: '👑'
    }
  ]

  const addOns = [
    { name: 'Personal Training Session', price: 75, icon: '🎯' },
    { name: 'Nutrition Consultation', price: 50, icon: '🥗' },
    { name: 'Massage Therapy', price: 80, icon: '💆‍♀️' },
    { name: 'Body Composition Analysis', price: 25, icon: '📊' }
  ]

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  }

  return (
    <section id="membership" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary-100 dark:from-primary-900/30 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-secondary-100 dark:from-secondary-900/30 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div className="container-max relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 animate-fade-in transition-colors duration-300">
            <span className="mr-2">💳</span>
            Membership Plans
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up transition-colors duration-300">
            Choose Your 
            <span className="gradient-text"> Membership</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up transition-colors duration-300">
            Flexible membership options designed to fit your lifestyle and budget. All plans include access to our world-class facilities.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-soft border border-gray-200 dark:border-gray-700 animate-scale-in transition-colors duration-300">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-soft overflow-hidden transition-all duration-500 hover:shadow-large hover:-translate-y-2 border-2 animate-scale-in interactive-card ${
                plan.popular 
                  ? 'border-primary-600 dark:border-primary-500 ring-4 ring-primary-100 dark:ring-primary-900/50 transform scale-105' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 text-white text-center py-3 font-semibold">
                  <span className="mr-2">⭐</span>
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-primary-600 dark:text-primary-400 transition-colors duration-300">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2 transition-colors duration-300">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-600 dark:text-green-400 font-semibold mt-2 transition-colors duration-300">
                        Save ${plan.savings} per year!
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link 
                  to="/login"
                  className={`block w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-primary-600 dark:hover:to-secondary-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-primary-600 dark:hover:bg-primary-500 text-gray-900 dark:text-gray-200 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-soft border border-gray-100 dark:border-gray-700 mb-16 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors duration-300">Optional Add-ons</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 interactive-card">
                <div className="text-3xl mb-3">{addon.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{addon.name}</h4>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 transition-colors duration-300">${addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">All Memberships Include</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: '7-Day Free Trial', desc: 'Try before you commit' },
              { icon: '🚫', title: 'No Setup Fees', desc: 'Start immediately' },
              { icon: '📱', title: 'Mobile App', desc: 'Track your progress' },
              { icon: '🔄', title: 'Cancel Anytime', desc: 'No long-term contracts' }
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Questions About Membership?</h3>
          <p className="text-xl mb-8 opacity-90">Our team is here to help you choose the perfect plan</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Membership