import React, { useState, useRef } from 'react';
import { Upload, X, Send } from 'lucide-react';

const Personalizados = () => {
    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState([]);
    const inputRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    };

    const handleFiles = (newFiles) => {
        const validFiles = Array.from(newFiles).filter(file => file.type.startsWith('image/'));

        const newFilesWithPreview = validFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setFiles(prev => [...prev, ...newFilesWithPreview]);
    };

    const removeFile = (indexToRemove) => {
        setFiles(files.filter((_, index) => index !== indexToRemove));
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div className="container section">
            <h2 className="mb-2" style={{ color: 'var(--color-accent)', textAlign: 'center' }}>Diseños Personalizados</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                ¿Tenés una idea en mente? Subí tus imágenes de referencia o diseños y nosotros lo hacemos realidad.
                Ideal para regalos empresariales, eventos especiales o simplemente para darle un toque único a tu hogar.
            </p>

            <div className="upload-container" style={{ maxWidth: '800px', margin: '0 auto', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
                <form onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={inputRef}
                        type="file"
                        multiple={true}
                        onChange={handleChange}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />

                    <div
                        className={`drop-zone ${dragActive ? 'drag-active' : ''}`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        onClick={onButtonClick}
                        style={{
                            border: `2px dashed ${dragActive ? 'var(--color-accent)' : '#ccc'}`,
                            borderRadius: '8px',
                            padding: '3rem 2rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: dragActive ? '#f9f9f9' : 'transparent',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <Upload size={48} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                        <p style={{ fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                            Arrastrá y soltá tus imágenes aquí
                        </p>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>
                            o hacé click para seleccionar archivos
                        </p>
                    </div>

                    {files.length > 0 && (
                        <div className="previews" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
                            {files.map((fileObj, index) => (
                                <div key={index} style={{ position: 'relative', aspectRatio: '1' }}>
                                    <img
                                        src={fileObj.preview}
                                        alt="preview"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeFile(index);
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: '-8px',
                                            right: '-8px',
                                            background: 'var(--color-accent)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div style={{ marginTop: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Comentarios adicionales</label>
                        <textarea
                            rows="4"
                            placeholder="Contanos más sobre tu idea (colores, medidas, cantidad...)"
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}
                        ></textarea>
                    </div>

                    <button
                        className="btn btn-primary"
                        style={{ marginTop: '1.5rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                    >
                        <Send size={20} />
                        Enviar Consulta
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Personalizados;
