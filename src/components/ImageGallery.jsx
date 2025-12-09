import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageGallery.css';

const ImageGallery = ({ images, initialIndex = 0, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPan, setStartPan] = useState({ x: 0, y: 0 });

    const containerRef = useRef(null);

    // Reset zoom when image changes
    useEffect(() => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    }, [currentIndex]);

    const handleNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleWheel = (e) => {
        // Prevent default scrolling
        e.preventDefault();

        const delta = e.deltaY * -0.01;
        const newScale = Math.min(Math.max(1, scale + delta), 1.5); // Clamp between 1x and 1.5x

        setScale(newScale);

        // If zooming out to 1x, reset position
        if (newScale === 1) {
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleDoubleClick = (e) => {
        if (scale > 1) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
        } else {
            setScale(1.2); // Zoom to 1.2x
            // Ideally center zoom on click, but for simplicity center on image for now
            setPosition({ x: 0, y: 0 });
        }
    };

    const handleMouseDown = (e) => {
        if (scale > 1) {
            setIsDragging(true);
            setStartPan({ x: e.clientX - position.x, y: e.clientY - position.y });
        }
    };

    const handleMouseMove = (e) => {
        if (isDragging && scale > 1) {
            e.preventDefault();
            const newX = e.clientX - startPan.x;
            const newY = e.clientY - startPan.y;
            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Add passive: false to wheel listener to control scrolling
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const onWheel = (e) => handleWheel(e);
            container.addEventListener('wheel', onWheel, { passive: false });
            return () => container.removeEventListener('wheel', onWheel);
        }
    }, [scale]);

    return (
        <div className="image-gallery-overlay">
            <button className="gallery-close-btn" onClick={onClose}>
                <X size={32} />
            </button>

            <div className="gallery-content">
                {images.length > 1 && (
                    <>
                        <button className="gallery-nav-btn prev" onClick={handlePrev}>
                            <ChevronLeft size={40} />
                        </button>
                        <button className="gallery-nav-btn next" onClick={handleNext}>
                            <ChevronRight size={40} />
                        </button>
                    </>
                )}

                <div
                    className="gallery-image-container"
                    ref={containerRef}
                    onDoubleClick={handleDoubleClick}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{
                        transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                    }}
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Zoomed view ${currentIndex + 1}`}
                        className="gallery-image"
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
