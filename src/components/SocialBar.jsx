export default function SocialBar() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"><i className="fab fa-facebook-f"></i></a>
      <a href="#" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"><i className="fab fa-instagram"></i></a>
      <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"><i className="fab fa-whatsapp"></i></a>
    </div>
  );
}
