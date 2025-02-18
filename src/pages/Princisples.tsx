import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function Principles() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <h1 className="text-4xl sm:text-3xl xs:text-2xl font-bold text-blue-600">Principles</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-md text-gray-600 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, aut. Animi dolore culpa voluptas nobis omnis itaque facere cumque autem dolorum laudantium consequuntur sunt porro, corrupti aliquam expedita voluptates esse. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas consequatur in aut maxime esse accusantium ipsam rem, dicta aspernatur, impedit vero reiciendis inventore laboriosam quo neque alias consectetur? Ratione, expedita vitae perferendis, atque tenetur itaque, fuga esse veniam eaque exercitationem molestiae beatae soluta porro! Iusto rem cumque necessitatibus blanditiis ducimus pariatur sunt, molestias corrupti sit voluptas iure molestiae, facere accusantium at eos reiciendis assumenda incidunt enim. Recusandae dicta aliquid fugit enim quas alias, earum blanditiis! Soluta neque temporibus ex adipisci aut sapiente accusamus officia eaque, deserunt animi voluptatem sint ipsam dolorum repellendus libero, quaerat delectus quam! Numquam perferendis aperiam quod repellendus neque repellat officia ipsum veniam! Id, nobis! Dolor soluta impedit deleniti exercitationem, aut quaerat quia dignissimos pariatur ullam aliquam dolore consequuntur! Harum molestiae aliquid quibusdam aliquam unde voluptatum delectus nam eligendi ut consectetur necessitatibus deserunt quam magnam error obcaecati aspernatur exercitationem, suscipit repellat eveniet maxime eum! Ullam aspernatur harum vero quae cum. Porro provident impedit dolore explicabo consectetur possimus quae accusamus nulla laudantium sequi? Dolorem perferendis asperiores nobis. Perspiciatis dolorum minima natus esse, delectus quisquam deleniti consequatur. Ut illum cumque eaque dolores quam sed nihil, harum quaerat nobis illo ducimus labore magnam ullam accusantium delectus sunt corrupti quae maxime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}