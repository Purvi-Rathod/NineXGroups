"use client";

import React, { useEffect, useRef, useState } from "react";
import { Job } from "@/lib/jobs/jobTypes";
import L from "leaflet";

interface JobMapProps {
    jobs: Job[];
    highlightedJobId?: string | null;
    onMarkerHover?: (job: Job | null) => void;
    onMarkerClick?: (job: Job) => void;
    className?: string;
}

export default function JobMap({
    jobs,
    highlightedJobId,
    onMarkerHover,
    onMarkerClick,
    className = "",
}: JobMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markersRef = useRef<Map<string, L.Marker>>(new Map());
    const [isClient, setIsClient] = useState(false);

    // Calculate center based on job locations
    const getMapCenter = (): [number, number] => {
        if (jobs.length === 0) return [20.5937, 78.9629]; // Center of India

        const avgLat = jobs.reduce((sum, job) => sum + job.location.latitude, 0) / jobs.length;
        const avgLng = jobs.reduce((sum, job) => sum + job.location.longitude, 0) / jobs.length;
        return [avgLat, avgLng];
    };

    // Initialize on client only
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Initialize map
    useEffect(() => {
        if (!isClient || !mapRef.current || mapInstanceRef.current) return;

        // Create map
        const map = L.map(mapRef.current).setView(getMapCenter(), 5);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        mapInstanceRef.current = map;

        return () => {
            map.remove();
            mapInstanceRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClient]);

    // Update markers when jobs change
    useEffect(() => {
        if (!mapInstanceRef.current || !isClient) return;

        const map = mapInstanceRef.current;

        // Clear existing markers
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current.clear();

        // Add new markers
        jobs.forEach((job) => {
            const isHighlighted = highlightedJobId === job.id;

            const icon = L.divIcon({
                className: "custom-marker",
                html: `
          <div style="position: relative;">
            <div style="
              width: 32px;
              height: 32px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 6px rgba(0,0,0,0.2);
              transition: transform 0.2s;
              background: ${isHighlighted ? "#12D4FF" : "#1959FA"};
              transform: ${isHighlighted ? "scale(1.25)" : "scale(1)"};
            ">
              <svg style="width: 16px; height: 16px; fill: white;" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            ${isHighlighted ? '<div style="position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%); width: 12px; height: 12px; background: #12D4FF; border-radius: 50%; animation: ping 1s infinite;"></div>' : ''}
          </div>
        `,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
            });

            const marker = L.marker([job.location.latitude, job.location.longitude], { icon })
                .addTo(map)
                .bindPopup(`
          <div style="padding: 12px; min-width: 180px;">
            <h4 style="font-weight: 600; color: #1f2937; font-size: 14px; margin-bottom: 4px;">${job.title}</h4>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">
              ${job.location.city}, ${job.location.country}
            </p>
            <span style="font-size: 12px; background: #dbeafe; color: #1d4ed8; padding: 2px 8px; border-radius: 9999px;">
              ${job.department}
            </span>
          </div>
        `);

            marker.on("mouseover", () => onMarkerHover?.(job));
            marker.on("mouseout", () => onMarkerHover?.(null));
            marker.on("click", () => onMarkerClick?.(job));

            markersRef.current.set(job.id, marker);
        });

        // Fit bounds if we have jobs
        if (jobs.length > 0) {
            const bounds = L.latLngBounds(
                jobs.map((job) => [job.location.latitude, job.location.longitude])
            );
            map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
        }
    }, [jobs, highlightedJobId, isClient, onMarkerHover, onMarkerClick]);

    // Update highlighted marker
    useEffect(() => {
        if (!mapInstanceRef.current || !isClient) return;

        markersRef.current.forEach((marker, jobId) => {
            const job = jobs.find((j) => j.id === jobId);
            if (!job) return;

            const isHighlighted = highlightedJobId === jobId;

            const icon = L.divIcon({
                className: "custom-marker",
                html: `
          <div style="position: relative;">
            <div style="
              width: 32px;
              height: 32px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 6px rgba(0,0,0,0.2);
              transition: transform 0.2s;
              background: ${isHighlighted ? "#12D4FF" : "#1959FA"};
              transform: ${isHighlighted ? "scale(1.25)" : "scale(1)"};
            ">
              <svg style="width: 16px; height: 16px; fill: white;" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>
        `,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32],
            });

            marker.setIcon(icon);
        });
    }, [highlightedJobId, jobs, isClient]);

    if (!isClient) {
        return (
            <div className={`bg-gray-100 rounded-xl flex items-center justify-center ${className}`}>
                <div className="text-gray-400">Loading map...</div>
            </div>
        );
    }

    return (
        <div className={`relative rounded-xl overflow-hidden ${className}`}>
            <style jsx global>{`
        .custom-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
        }
        
        .leaflet-popup-content {
          margin: 0;
        }
        
        .leaflet-popup-close-button {
          top: 8px !important;
          right: 8px !important;
        }

        @keyframes ping {
          0% { transform: translateX(-50%) scale(1); opacity: 1; }
          75%, 100% { transform: translateX(-50%) scale(2); opacity: 0; }
        }
      `}</style>

            <div ref={mapRef} className="w-full h-full" style={{ minHeight: "100%" }} />

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md z-[1000]">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-3 h-3 rounded-full bg-[#1959FA]" />
                    <span>{jobs.length} job{jobs.length !== 1 ? "s" : ""} in area</span>
                </div>
            </div>
        </div>
    );
}
