import { useTheme } from '../../contexts/ThemeContext'

const About = () => {
  const { isDark } = useTheme()

  const features = [
    {
      icon: '🏋️‍♂️',
      title: 'State-of-the-Art Equipment',
      description: 'Latest fitness technology and premium equipment for all your workout needs.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Personal Trainers',
      description: 'Certified professionals dedicated to helping you achieve your fitness goals.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🏃‍♀️',
      title: 'Diverse Programs',
      description: 'From HIIT to yoga, we offer classes for every fitness level and interest.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🕐',
      title: '24/7 Access',
      description: 'Work out on your schedule with round-the-clock gym access.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🥗',
      title: 'Nutrition Guidance',
      description: 'Comprehensive meal planning and nutritional support for optimal results.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '🏆',
      title: 'Results Guaranteed',
      description: 'Proven track record of helping members achieve their fitness goals.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  const achievements = [
    { number: '98%', label: 'Member Satisfaction', icon: '😊' },
    { number: '15+', label: 'Years Experience', icon: '📅' },
    { number: '50K+', label: 'Workouts Completed', icon: '💪' },
    { number: '100+', label: 'Success Stories', icon: '🌟' }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${isDark ? 'bg-pattern-dark' : 'bg-pattern'} opacity-5`}></div>
      
      <div className="container-max relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 animate-fade-in transition-colors duration-300">
            <span className="mr-2">✨</span>
            Why Choose Global Fitness
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up transition-colors duration-300">
            Transform Your Life with
            <span className="gradient-text block sm:inline"> Global Fitness</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up transition-colors duration-300">
            We're more than just a gym. We're your partner in building a healthier, stronger, and more confident you through personalized training and unwavering support.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Modern gym interior"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">2.5K+</div>
                  <div className="text-xs">Members</div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                <span className="text-3xl">🏆</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Premium Fitness Experience
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              At Global Fitness, we believe everyone deserves access to world-class fitness facilities. 
              Our modern gyms are equipped with the latest technology and maintained to the highest standards.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
              Whether you're a beginner starting your fitness journey or an experienced athlete pushing your limits, 
              our supportive environment and expert guidance will help you succeed.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{achievement.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
            
            <button className="btn-primary group">
              Explore Our Facilities
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-scale-in interactive-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover Effect Arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className={`absolute inset-0 ${isDark ? 'bg-pattern-dark' : 'bg-pattern'} opacity-10`}></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h3>
              <p className="text-xl mb-8 opacity-90">Join thousands of members who have already transformed their lives</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Schedule Free Tour
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About