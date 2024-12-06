import { useLocation, useNavigate } from "react-router-dom";


const renderCarouselItem = (item) => {
    // Vérifiez si l'élément est une vidéo YouTube
    const isYoutubeVideo = item.includes("youtube.com");

    if (isYoutubeVideo) {
        const videoId = item.split("v=")[1]?.split("&")[0]; // Extraire l'ID de la vidéo
        return (
            <iframe
                key={item}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            ></iframe>
        );
    } else {
        return (
            <img
                key={item}
                src={item}
                alt="Carousel Item"
                className="w-full h-full object-cover"
            />
        );
    }
};

function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    if (!project) {
        return navigate("/", { replace: true });
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 py-24 mt-16">
            {/* Title Section */}
            <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {project.name}
            </h1>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Section 1: Description and Image */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 glass-card p-4 rounded-xl">
                        renderCarouselItem(project.carouselImages[1])
                    </div>
                    <div className="w-full md:w-1/2 glass-card p-6 rounded-xl">
                        <p className="text-lg leading-relaxed">{project.Description}</p>
                    </div>
                </div>

                {/* Section 2: Objective and Details */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 glass-card p-6 rounded-xl">
                        <p className="text-lg leading-relaxed">
                            <span className="font-semibold text-primary">Objectif: </span>
                            {project.objective}
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            {project.details}
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 glass-card p-4 rounded-xl">
                        renderCarouselItem(project.carouselImages[2])
                    </div>
                </div>

                {/* Section 3: Gallery */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-primary">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.carouselImages.map((item) => renderCarouselItem(item))}
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center pt-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;

