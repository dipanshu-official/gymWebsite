import { useTheme } from '../../contexts/ThemeContext'

const Trainers = () => {
  const { isDark } = useTheme()

  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Strength Training & Nutrition',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      certifications: ['NASM-CPT', 'Precision Nutrition'],
      bio: 'Passionate about helping clients build strength and confidence through personalized training programs.'
    },
    {
      name: 'Mike Rodriguez',
      specialty: 'HIIT & Functional Training',
      experience: '6 years',
      image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      certifications: ['ACSM-CPT', 'CrossFit Level 2'],
      bio: 'Specializes in high-intensity workouts that deliver real results and improved athletic performance.'
    },
    {
      name: 'Emily Chen',
      specialty: 'Yoga & Mindfulness',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      certifications: ['RYT-500', 'Meditation Teacher'],
      bio: 'Dedicated to helping clients find balance through mind-body practices and stress reduction techniques.'
    },
    {
      name: 'David Park',
      specialty: 'Sports Performance',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      certifications: ['CSCS', 'FMS Level 2'],
      bio: 'Former professional athlete focused on optimizing performance and preventing injuries for all fitness levels.'
    }
  ]

  return (
    <section id="trainers" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6 animate-fade-in transition-colors duration-300">
            <span className="mr-2">💪</span>
            Expert Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Meet Our 
            <span className="text-primary-600 dark:text-primary-400"> Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our certified professionals are here to guide, motivate, and support you every step of the way on your fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100 dark:border-gray-700 interactive-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">{trainer.bio}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{trainer.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2 transition-colors duration-300">{trainer.specialty}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                  {trainer.experience} experience
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.certifications.map((cert, certIndex) => (
                    <span 
                      key={certIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-600 dark:hover:bg-primary-500 text-gray-900 dark:text-gray-200 hover:text-white py-2 px-4 rounded-lg transition-all duration-300 font-semibold hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
            Ready to work with a personal trainer? All our trainers offer free consultations.
          </p>
          <button className="btn-primary hover:scale-105 transition-transform duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Trainers