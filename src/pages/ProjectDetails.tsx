import { useLocation, useNavigate } from "react-router-dom";

function ProjectDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    if (!project) {
        return navigate("/", { replace: true });
    }

    return (
        <div className="container mx-auto px-6 py-12 space-y-12">
            {/* Titre */}
            <h1 className="text-4xl font-bold text-center mb-6">{project.name}</h1>

            {/* Section 1 : Description et Image */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                <img src={project.carouselImages[1]} alt={project.name} className="w-full md:w-1/2 max-w-md max-h-64 rounded-lg object-contain" />
                <p className="text-lg md:w-1/2">{project.description}</p>
            </div>

            {/* Section 2 : Objectif et Détails */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                <p className="text-lg md:w-1/2">
                    <strong></strong> {project.objective}
                    <br />
                    {project.details}
                </p>
                <img src={project.carouselImages[2]} alt={`Objectif de ${project.name}`} className="w-full md:w-1/2 max-w-md max-h-64 rounded-lg object-contain" />
            </div>

            {/* Section 3 : Carrousel */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Galerie</h2>
                <div className="flex gap-4 overflow-x-scroll">
                    {project.carouselImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Galerie ${index + 1}`}
                            className="w-full md:w-1/2 max-w-md max-h-64 rounded-lg object-contain"
                        />
                    ))}
                </div>
            </div>

            {/* Bouton Retour */}
            <div className="text-center">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Retour
                </button>
            </div>
        </div>
    );
}

export default ProjectDetails;
