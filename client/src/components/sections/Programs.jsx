import { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const { isDark } = useTheme()

  const categories = [
    { id: 'all', name: 'All Programs', icon: '🎯' },
    { id: 'strength', name: 'Strength', icon: '💪' },
    { id: 'cardio', name: 'Cardio', icon: '❤️' },
    { id: 'flexibility', name: 'Flexibility', icon: '🧘' },
    { id: 'group', name: 'Group Classes', icon: '👥' }
  ]

  const programs = [
    {
      id: 1,
      name: 'Strength Training',
      category: 'strength',
      description: 'Build muscle and increase power with our comprehensive strength training programs.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '45-60 min',
      level: 'All Levels',
      intensity: 'High',
      equipment: 'Weights, Machines',
      benefits: ['Muscle Building', 'Bone Density', 'Metabolism Boost'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 2,
      name: 'HIIT Classes',
      category: 'cardio',
      description: 'High-intensity interval training for maximum calorie burn and cardiovascular health.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '30-45 min',
      level: 'Intermediate',
      intensity: 'Very High',
      equipment: 'Bodyweight, Light Weights',
      benefits: ['Fat Burning', 'Cardio Health', 'Time Efficient'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 3,
      name: 'Yoga & Pilates',
      category: 'flexibility',
      description: 'Improve flexibility, balance, and mental wellness with our mind-body classes.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '60 min',
      level: 'All Levels',
      intensity: 'Low-Medium',
      equipment: 'Mats, Props',
      benefits: ['Flexibility', 'Balance', 'Stress Relief'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      name: 'Cardio Bootcamp',
      category: 'cardio',
      description: 'Intense cardio workouts designed to push your limits and boost endurance.',
      image: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '45 min',
      level: 'Advanced',
      intensity: 'Very High',
      equipment: 'Various',
      benefits: ['Endurance', 'Fat Loss', 'Mental Toughness'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 5,
      name: 'Functional Fitness',
      category: 'strength',
      description: 'Real-world movements that improve your daily life activities and overall mobility.',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '50 min',
      level: 'All Levels',
      intensity: 'Medium',
      equipment: 'Functional Tools',
      benefits: ['Mobility', 'Stability', 'Daily Function'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 6,
      name: 'Aqua Fitness',
      category: 'cardio',
      description: 'Low-impact, full-body workout in our Olympic-sized swimming pool.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '60 min',
      level: 'All Levels',
      intensity: 'Medium',
      equipment: 'Pool, Water Weights',
      benefits: ['Low Impact', 'Full Body', 'Joint Friendly'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 7,
      name: 'Spin Classes',
      category: 'group',
      description: 'High-energy cycling classes with motivating music and expert instruction.',
      image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '45 min',
      level: 'All Levels',
      intensity: 'High',
      equipment: 'Spin Bikes',
      benefits: ['Cardio', 'Leg Strength', 'Group Energy'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 8,
      name: 'CrossFit',
      category: 'group',
      description: 'Varied functional movements performed at high intensity in a group setting.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      duration: '60 min',
      level: 'Intermediate-Advanced',
      intensity: 'Very High',
      equipment: 'Various',
      benefits: ['Total Fitness', 'Community', 'Competition'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory)

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'Low-Medium':
        return 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
      case 'Medium':
        return 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300'
      case 'High':
        return 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300'
      case 'Very High':
        return 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
      default:
        return 'bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300'
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'All Levels':
        return 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
      case 'Beginner':
        return 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
      case 'Intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300'
      case 'Advanced':
        return 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
      case 'Intermediate-Advanced':
        return 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300'
      default:
        return 'bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300'
    }
  }

  return (
    <section id="programs" className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-100 dark:from-primary-900/30 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary-100 dark:from-secondary-900/30 to-transparent rounded-full blur-3xl opacity-50"></div>
      
      <div className="container-max relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 animate-fade-in transition-colors duration-300">
            <span className="mr-2">🏋️</span>
            Fitness Programs
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up transition-colors duration-300">
            Our 
            <span className="gradient-text"> Programs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-slide-up transition-colors duration-300">
            Discover a variety of fitness programs designed to meet your goals, whether you want to build strength, lose weight, or improve your overall health.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPrograms.map((program, index) => (
            <div 
              key={program.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-soft hover:shadow-large transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-scale-in interactive-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Info */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <span className={`status-badge ${getLevelColor(program.level)}`}>
                    {program.level}
                  </span>
                  <span className={`status-badge ${getIntensityColor(program.intensity)}`}>
                    {program.intensity}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                    ⏱️ {program.duration}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`w-3 h-3 bg-gradient-to-r ${program.color} rounded-full`}></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {program.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300">
                  {program.description}
                </p>
                
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <span 
                        key={benefitIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full transition-colors duration-300"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div className="mb-6">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                    <span className="mr-2">🏋️</span>
                    <span>{program.equipment}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-primary-600 dark:hover:to-secondary-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className={`absolute inset-0 ${isDark ? 'bg-pattern-dark' : 'bg-pattern'} opacity-10`}></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-xl mb-8 opacity-90">Our trainers can create a custom program tailored specifically to your goals</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Custom Program
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs